import Input from "./inputs/input"
import Timer from "./timer"
import React from "react"

export default function Frame(){
    const [data, setData] = React.useState({dia: 0, mes: 0, ano: 0})
    const [erroAno, setErroAno] = React.useState({"state": false, "message": ""})
    const [erroMes, setErroMes] = React.useState({"state": false, "message": ""})
    const [erroDia, setErroDia] = React.useState({"state": false, "message": ""})
    const [erroData, setErroData] = React.useState({"state": false, "message": ""})
    const currentData = new Date()
    const func = () => {
        const dia = document.getElementById("dia").value
        const mes = document.getElementById("mes").value
        const ano = document.getElementById("ano").value

        let erros = {
            "dia": {"state": false, "message": ""},
            "mes": {"state": false, "message": ""},
            "ano": {"state": false, "message": ""},
            "data": {"state": false, "message": ""}
        }
        setErroAno({"state": false, "message": ""})
        setErroMes({"state": false, "message": ""})
        setErroDia({"state": false, "message": ""})

        if (ano === "" || mes === "" || dia === "") {
            if (dia === "") {
                erros.dia = {"state": true, "message": "Campo obrigatório"}
            }
            if (mes === "") {
                erros.mes = {"state": true, "message": "Campo obrigatório"}
            }
            if (ano === "") {
                erros.ano = {"state": true, "message": "Campo obrigatório"}
            }
        } else {
            if (ano > currentData.getFullYear() || ano < 1) {
                erros.ano = {"state": true, "message": "Insira um ano válido"}
            } else if (mes < 1 || mes > 12) {
                erros.mes = {"state": true, "message": "Insira um mês valido"}
            } else if (dia < 1 || dia > 31) {
                erros.dia = {"state": true, "message": "Insira um dia valido"}
            }
        }
        
        const data = new Date(ano, mes - 1, dia);
        if (!(data.getFullYear() === ano && data.getMonth() === mes - 1 && data.getDay() === dia))
            erros.data = {"state": true, "message": "Insira uma data válida"}   

        if (erros.ano.state || erros.mes.state || erros.dia.state || erros.data.state) {
            setErroAno(erros.ano)
            setErroMes(erros.mes)
            setErroDia(erros.dia)
            setErroData(erros.data)
        } else {
    
            let anos = currentData.getFullYear() - ano;
            let meses = currentData.getMonth() - mes + 1;
            let dias = currentData.getDay() - dia + 1;
    
            if (dias < 0) {
                const ultimoDiaMesAnterior = new Date(anos, meses - 1, 0).getDate();
                dias += ultimoDiaMesAnterior;
                meses--;
            }
    
            if (meses < 0) {
                meses += 12;
                anos--;
            }
            setData({
                dia: dias,
                mes: meses,
                ano: anos
            })
        }

    }
    return (
        <div className="w-9/10 sm:w-1/2 h-fit flex flex-col p-8 gap-2 sm:gap-1 bg-white rounded-l-xl rounded-tr-xl rounded-br-[6rem]">
            <div className="flex flex-row gap-1 sm:w-7/10 w-full sm:p-0 p-4">
                <div className="flex flex-col w-1/3">
                    <Input id="dia" label="Dia" max={31} min={1}/>
                    {erroDia.state && <p className="text-light-red-color text-[0.6rem] font-bold">{erroDia.message}</p>}
                </div>
                <div className="flex flex-col w-1/3">
                    <Input id="mes" label="Mês" max={12} min={1}/>
                    {erroMes.state && <p className="text-light-red-color text-[0.6rem] font-bold">{erroMes.message}</p>}
                </div>
                <div className="flex flex-col w-1/3">
                    <Input id="ano" label="Ano" min={1} max={new Date().getFullYear()}/>
                    {erroAno.state && <p className="text-light-red-color text-[0.6rem] font-bold">{erroAno.message}</p>}
                </div>
            </div>
            {erroData.state && <p className="text-light-red-color text-[0.6rem] font-bold sm:w-7/10 w-full text-center">{erroData.message}</p>}
            <div className="flex flex-row items-center w-full h-fit">
                <div className="bg-gray-300 opacity-50 h-[1px] w-full"></div>
                <div className="flex flex-row justify-center items-center bg-[hsl(259,100%,65%)] hover:bg-black ease-in-out transition-all duration-300 rounded-full p-2 h-12 w-12 aspect-square cursor-pointer" onClick={func}><img src="assets\images\icon-arrow.svg" className="aspect-square w-8 h-8" alt="" /></div>
            </div>
            <Timer years={data.ano} months={data.mes} days={data.dia}/>
        </div>
    )
}
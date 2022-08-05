import React, {useEffect} from 'react'
import './App.css'
import TableData from "./components/TableData";
import {createLogger} from "vite";


type ClassType = {
  code: string
}

type TrimesterType = {
  name: string,
  trimester: string,
  classes: ClassType[] | null
}

function App() {
  const managementClasses: TrimesterType[]  = [
    {
      name: "S1",
      trimester: "A21",
      classes: [
        {code: "IFT209"},
        {code: "IFT232"},
        {code: "IFT339"},
        {code: "MAT115"},
        {code: "IFT203"},
      ]
    },
    {name: "T2", trimester: "H22", classes: null},
    {
      name: "S3",
      trimester: "E22",
      classes: [
        {code: "IFT287"},
        {code: "IFT320"},
        {code: "IFT436"},
        {code: "ADM124"},
        {code: "MAR221"}
      ]
    },
    {name: "T3", trimester: "A22", classes: null},
    {
      name: "S4",
      trimester: "H23",
      classes: [
        {code: "IFT585"},
        {code: "IFT606"},
        {code: "IGE401"},
        {code: "IGL601"},
        {code: "STT418"},
      ]
    },
    {name: "T3", trimester: "E23", classes: null},
    {
      name: "S5",
      trimester: "A23",
      classes: [
        {code: "IGL301"},
        {code: "IGE487"},
        {code: "OPT."},
        {code: "OPT."},
        {code: "OPT."},
      ]
    },
    {
      name: "S6",
      trimester: "H24",
      classes: [
        {code: "IGE502"},
        {code: "GRH121"},
        {code: "OPT."},
        {code: "OPT."},
        {code: "OPT."}
      ]
    }
  ]

  const generateTable = (classes: TrimesterType[]) => {
    const maxRows = Math.max(...classes.map((c) => c.classes?.length ?? 0));
    const rows = [];

    for (let i = 0; i < maxRows; i++) {
      rows.push(
        <tr>{classes.map((c: TrimesterType) => <TableData classCode={c.classes !== null ? c.classes.at(i)?.code : undefined} />)}</tr>
      )
    }

    return rows;
  }

  return (
    <div className={'flex flex-col container mx-auto h-screen'}>
      <div className={'flex flex-col'}>
        <table className={'classes-table table-auto text-center'}>
          <caption className={'table-caption text-xl mb-3 font-bold'}>Informatique de Gestion</caption>
          <thead>
          <tr>
            {managementClasses.map((c) => (<th>{c.name}</th>))}
          </tr>
          <tr>
            {managementClasses.map((c) => (<th>{c.trimester}</th>))}
          </tr>
          </thead>
          <tbody>
          {
            generateTable(managementClasses)
          }
          </tbody>
        </table>
      </div>
      <footer className={'flex flex-col mt-auto p-2 items-center'}>
        <div>
          <span>Olivier Deschênes — </span>
          <a
            href={'https://github.com/olivier-deschenes/uds-horaire'}
            className={'text-blue-600 hover:underline font-mono'}
            target={'_blank'}
          >Repo</a>
        </div>
      </footer>
    </div>
  )
}

export default App

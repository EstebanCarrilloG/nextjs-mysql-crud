import { NextResponse } from "next/server"

export function GET(){
    return NextResponse.json("Obteniendo producto")
}

export function DELETE(){
    return NextResponse.json("Eliminando producto")

}

export function PUT(){
    return NextResponse.json("Modificando producto")

}
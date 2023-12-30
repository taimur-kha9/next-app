"use server"
import { NextResponse, NextRequest } from "next/server";
import {pool} from "@/app/lib/utils";

export async function GET(NextRequest) {
    // return NextResponse.json({Response:"working"})
    const { searchParams } = new URL(NextRequest.url);
    const searchQuery = searchParams.get("q");
    const pageQuery = searchParams.get("page");
    try {
        const client = await pool.connect();
        try {
            const countRows = await client.query(`SELECT COUNT(*) FROM users`);
            let data = '';
            let showrows =10;
            let rowperpage = 0 ;
            if (!searchParams.get("rows")){
                showrows = 5;
            }else {
                showrows = searchParams.get("rows");
            }
            if (!pageQuery){
                 rowperpage = 0;
            } else {
                 rowperpage = showrows * (pageQuery-1);
            }
            console.log(pageQuery)
            if (!searchQuery) {
                data = await client.query('SELECT * FROM users ORDER BY id ASC LIMIT ( $1 ) OFFSET ( $2 )', [`${showrows}`,`${rowperpage}`]);
            } else {
                data = await client.query('SELECT * FROM users WHERE username ILIKE ( $1 ) ORDER BY id ASC LIMIT ( $2 ) OFFSET ( $3 )', [`%${searchQuery}%`, `${showrows}`, `${rowperpage}`]);
            }
            return NextResponse.json({data: data,rowCount : countRows.rows});
        } finally {
            client.release();
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        return NextResponse.json({ error: 'Internal Server Error' });
    }
}

export async function POST(NextRequest) {

    // const { data } = await NextRequest.json();
    // try {
    //     const client = await pool.connect();
    //     const result = await client.query('INSERT INTO table_unit(unit_name) VALUES ( $1 ) RETURNING *', [data]);
    //     const createdData = result.rows[0];
    //     client.release();
    //     return NextResponse.json({message:"OK",createdData},{status:201});
    // } catch (error) {
    //     console.error('Error executing query', error);
    //     return NextResponse.json({ error: 'Intern2al Server Error' },{status:500});
    // }
}

export async function DELETE(NextRequest) {

    // const { id } = await NextRequest.json();
    // try {
    //     const result = await pool.query('DELETE FROM table_unit WHERE key = $1', [id]);
    //     return NextResponse.json({ success: true, data: result.rows },{status:201});
    // } catch (error) {
    //     console.error('Error deleting data:', error);
    //     return NextResponse.json({ success: false, error: 'Internal Server Error' },{status:500});
    // }
}

export async function PUT(NextRequest) {}

export async function HEAD(NextRequest) {}

export async function PATCH(NextRequest) {}

// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
export async function OPTIONS(NextRequest) {}
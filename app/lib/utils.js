import { Pool } from "pg";

export const pool = new Pool({
  user:"postgres",
  host:"127.0.0.1",
  database:"wms",
  password:"1234",
  port:"5432",
})
export default async function dbConnect() {
  await pool.connect((err ,client, release) =>{
    if (err){
      return console.error("Error in connection",err.stack)
    }
    client.query("SELECT NOW()", (err,
                                  result) =>{
      release()
      if (err){
        return console.error("Error in Query Execution",err.stack)
      }
      console.log("Connected to database",result.rows)
    })
  })
}
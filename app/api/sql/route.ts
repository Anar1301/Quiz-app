// import { query } from "@/lib/connectDb";
// import { NextRequest, NextResponse } from "next/server";

// // export async function GET() {
// //   const response = await query("SELECT * FROM students");

// //   return NextResponse.json({
// //     data: response,
// //   });
// // }
// export const GET = async () => {
//   const students = await query("SELECT* FROM students WHERE age > 18");
//   return Response.json({ message: "success", data: students });
// };
// export const POST = async (request: NextRequest) => {
//   const body = await request.json();
//   const { name, age, gender } = body;

//   const student = await query(
//     "INSERT INTO students (name, age, gender) VALUES(${name},${age}, ${gender})"
//   );
//   return Response.json({ message: "successfully added", data: student });
// };

//index.js
async function main () {
const express = require('express');
const app = express();
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js')

app.use(cors())
const SUPABASE_URL = "https://byyqrzsfnteoqtxtjuhp.supabase.co";
const SUPABASE_KEY = "sb_publishable_wZ7Og9UpSIzd6u9AwS_AMg_U9LvEnUU";
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
//console.log(supabase);

const stuData = await supabase.from("SrtudentRoster").select('*');
console.log(stuData)
for (const student of stuData.data){
   console.log(student);
   const year = student.Year;
   const stuId = student.StudentID;
   const totCouData = [];
   const couData = await supabase
  .from('characters')
  .select('Course Code')
  .like('Course Code', stuId+'%');
  couData.data.forEach((str)=> (totCouData.push(str)));
  const couDataPlus = await supabase
  .from('characters')
  .select('Course Code')
  .like('Course Code', (stuId+1)+'%');
   couDataPlus.data.forEach((str)=> (totCouData.push(str)));
   
   const len = totCouData.length;
   let courseNum = ""
   for (let i = 0; i <len; i++)
   {
      courseNum = "Course" + (i+1);
      const { addErr } = supabase
      .from('Sheet3')
      .update({ [courseNum]: totCouData[i] })
      .eq('StudentID', stuId)
      if (i ==2)
      {
         break;
      }
      console.log("adding courses")
   }
}
console.log("got port to listen")
const server = app.listen(8080);

};


main();
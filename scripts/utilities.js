import { createClient } from "https://esm.sh/@supabase/supabase-js";
const supabaseUrl = "https://ljkutpwtwydvqvxsrbgm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxqa3V0cHd0d3lkdnF2eHNyYmdtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3OTkzMzgsImV4cCI6MjAyNjM3NTMzOH0.P4q7tQr3IQJvluw8eAZjMkkBWfuzVEpHtDDFR1osGp0";
const supabase = createClient(supabaseUrl, supabaseKey);

let { data: books, error } = await supabase.from("books").select("*");

for (let book of books) {
  let bookTitle = document.getElementById("bookTitle");
  bookTitle.innerHTML += `<p>${book.title}</p>`;

  let bookAuthor = document.getElementById("bookAuthor");
  bookAuthor.innerHTML += `<p>${book.author}</p>`;

  let bookISBN = document.getElementById("bookISBN");
  bookISBN.innerHTML += `<p>${book.isbn}</p>`;
}

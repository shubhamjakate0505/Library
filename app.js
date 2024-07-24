const show=document.querySelector(".open-btn");
const dialog=document.querySelector("dialog");
const close=document.querySelector(".close-btn")
const section=document.querySelector("section");
const author=document.querySelector("#author");
const title=document.querySelector("#title");
const pages=document.querySelector("#pages");
const submit=document.querySelector(".submit-btn");
const read=document.querySelector("#read");
const books=document.querySelector(".books")


show.addEventListener("click",()=>{
  dialog.showModal();
})
close.addEventListener("click",()=>{
  dialog.close();
})




function Book(author,title,pages,read) {
  this.author=author;
  this.title=title;
  this.pages=pages;
  this.read=read;
}
submit.addEventListener("click",(event)=>{
  event.preventDefault();
  const newbook=new Book(author.value,title.value,Number(pages.value),read.checked)
   addtoLibrary(newbook);
    dialog.close();

})
function addtoLibrary(book) {
  let div=document.createElement("div");
  books.appendChild(div);
  div.setAttribute("class","book");
  let author=document.createElement('h4')
  let title=document.createElement("h4")
  let pages=document.createElement("h4")
  let button=document.createElement("button")
  button.setAttribute("class","remove-btn")
  button.textContent="Remove"
  title.innerHTML=`<span>Title: </span> ${book.title}`     
  author.innerHTML= `<span>Author: </span> ${book.author}`
  pages.innerHTML=`<span>Pages: </span> ${book.pages}`
  div.appendChild(author);
  div.appendChild(title);
  div.appendChild(pages);
  div.appendChild(button);
  remove(div,button);
  
}
function remove(div,button){
  button.addEventListener('click',()=>{
      div.remove();
  })
}
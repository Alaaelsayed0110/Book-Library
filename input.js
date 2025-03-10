let left = -20;
let Top = 5;
let btnn = document.querySelector(".btn");
let img = document.querySelector(".img");
let num=parseInt(localStorage.getItem("number"));
let number = num;
let counter = 0; 
console.log(number)
let text = document.querySelector(".text");
let price = document.querySelector(".price");
let Author = document.querySelector(".author");
let mail = document.querySelector(".mail");
const persons = [];
let bookName;
let bookPrice;
let bookAuthor ;
let authorMAil ;
console.log(btnn)
btnn.onclick = function(event) {
    if (text.value == "" && price.value == "" && Author.value == "" && mail.value == "") {
        event.preventDefault(); 
        text.value = "plese enter a valid Name ";
        text.style.color = "red"
        text.classList.add("shake");
        price.value = "plese enter a valid number ";
        price.style.color = "red"
        price.classList.add("shake"); 
        Author.value = "plese enter a valid Name ";
        Author.style.color = "red"
        Author.classList.add("shake");
        mail.value = "plese enter Author Email ";
        mail.style.color = "red"
        mail.classList.add("shake");  
        setTimeout(() => {
            text.classList.remove("shake");
            text.value="";
            text.style.color = "black"
            price.classList.remove("shake");
            price.value="";
            price.style.color = "black"
            Author.classList.remove("shake");
            Author.value="";
            Author.style.color = "black"
            mail.classList.remove("shake");
            mail.value="";
            mail.style.color = "black"
        }, 2000);  
        return;
    }
    if(/^\d+$/.test(text.value)||text.value=="") {
        event.preventDefault();
        text.value = "plese enter a string ";
        text.style.color = "red"
        text.classList.add("shake");
            setTimeout(() => {
                text.classList.remove("shake");
                text.value="";
                text.style.color = "black"
            }, 2000);
            return;
    }
    if (isNaN(price.value) || price.value=="") {
        event.preventDefault();
        price.value = "plese enter a number ";
        price.style.color = "red";
        price.classList.add("shake");
            setTimeout(() => {
                price.classList.remove("shake");
                price.value="";
                price.style.color = "black"
            }, 2000);
            return;
    }
    if(/^\d+$/.test(Author.value)||Author.value=="") {
        event.preventDefault();
        Author.value = "plese enter a string ";
        Author.style.color = "red"
        Author.classList.add("shake");
            setTimeout(() => {
                Author.classList.remove("shake");
                Author.value="";
                Author.style.color = "black"
            }, 2000);
            return;
    }
    let emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (!emailPattern.test(mail.value)||mail.value=="") {
        event.preventDefault();
        mail.value = "plese enter an Email like name@gmail.com ";
        mail.style.color = "red"
        mail.classList.add("shake");
            setTimeout(() => {
                mail.classList.remove("shake");
                mail.value="";
                mail.style.color = "black"
            }, 2000);
            return;
    }
    else{
         bookName=text.value;
         bookPrice = price.value;
         bookAuthor = Author.value;
         authorMAil = mail.value;
        if (counter < number) {
            let clone = img.cloneNode(true);
            clone.classList.remove("img");
            clone.classList.add("flex");
            clone.style.position = 'absolute';
            clone.style.left = left + 'px';
            clone.style.top = Top + 'px';
            document.body.append(clone);
    
            console.log("I am clone");
    
            left += 50;
            Top += 0;
    
            if (parseInt(clone.style.left) === 330) {
                Top = Top + 130;
                left = -20;
            }
    
            counter++; 
            persons.push({ bookName ,  bookPrice , bookAuthor , authorMAil});
        } 
        if (counter === number) {
            text.disabled = true;
            price.disabled = true;
            Author.disabled = true;
            mail.disabled = true;
        }
    
        text.value = "";
        price.value = "";
        Author.value = "";
        mail.value = "";
        // console.log(persons)
    }
    
};
console.log(persons)

let b = document.querySelector(".click");

b.onclick=function(){
    document.body.style.backgroundImage = "url('https://i.pinimg.com/736x/c4/96/8e/c4968e62e43d690079c252962451124b.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.height="100vh"
    document.body.style.backgroundSize ="cover"
    document.body.style.color="#766512";
    document.body.style.fontSize="25px";
    document.body.style.backgroundPosition="top";
    document.body.style.display="flex";
    document.body.style.flexDirection="column";
    document.body.style.justifyContent="center";
    document.body.style.alignItems="center";
    var tableHTML = `
<table class="table"  border="1" style="border-collapse: collapse; width: 50%; margin: 20px auto; text-align: left;">
    <thead>
    </thead>
    <tbody>
`;

var tableHTML = `
<table class="table"  border="1" style="border-collapse: collapse; width: 50%; margin: 20px auto; text-align: left;">
    <thead>
    <tr>
        <th>Book Name</th>
        <th>Book Price</th>
        <th>Author Name</th>
        <th>Author Mail</th>
        <th>Edit</th>
        <th>Delete</th>
    </tr>
    </thead>
    <tbody>
`;

persons.forEach(person => {
tableHTML += `
    <tr>
    <td>${person.bookName}</td>
    <td>${person.bookPrice}</td>
    <td>${person.bookAuthor}</td>
    <td>${person.authorMAil}</td>
    <td><button class="edit style">Edit</button></td>
    <td> <button class="delete style">delete</button></td>
    </tr>
`;
});

tableHTML += `
    </tbody>
</table>
`;

document.body.innerHTML = `
<h2 style="text-align: center;">Book Library</h2>
${tableHTML}
`;
let editButtons = document.querySelectorAll(".edit"); 

document.addEventListener("click", function({ target }) {
    if (target.classList.contains("edit")) {
        let row = target.closest("tr");
        let cells = row.querySelectorAll("td:not(:nth-last-child(-n+2))"); 
        cells.forEach(cell => {
            let input = document.createElement("input");
            input.type = "text";
            input.classList.add("inputStyle")
            input.value = cell.textContent.trim();
            cell.textContent = "";
            cell.appendChild(input);
        });

        target.textContent = "Done"; 
        target.classList.remove("edit");
        target.classList.add("save");
    } 
    else if (target.classList.contains("save")) {
        let row = target.closest("tr");
        let inputs = row.querySelectorAll("td input");
        let isValid = true; 
        inputs.forEach((input, index) => {
            let value = input.value.trim();
            let cell = input.parentElement;

            if (index === 0 || index === 2) { 
                if (!/^[a-zA-Z\s]+$/.test(value)) {
                    isValid = false;
                    input.style.border = "2px solid red";
                } else {
                    input.style.border = "";
                }
            } else if (index === 1) { 
                if (!/^\d+$/.test(value)) {
                    isValid = false;
                    input.style.border = "2px solid red";
                } else {
                    input.style.border = "";
                }
            } else if (index === 3) { 
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                    isValid = false;
                    input.style.border = "2px solid red";
                } else {
                    input.style.border = "";
                }
            }
        });

        if (!isValid) {
            return;
        }

        inputs.forEach(input => {
            let cell = input.parentElement;
            cell.textContent = input.value;
        });

        target.textContent = "Edit";
        target.classList.remove("save");
        target.classList.add("edit");
    }
});

let DeletButtons = document.querySelectorAll(".delete"); 

DeletButtons.forEach(button => {
    button.onclick = function({ target }) {
        console.log(target);         
        let row = target.closest("tr");
        row.style.display="none";
        console.log(row); 
    };
})
}

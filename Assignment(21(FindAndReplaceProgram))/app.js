let msg=prompt("Enter the message : ")

let choice=prompt(`Do you want to find a word or replace ? \n 1)Press "f" for finding \n 2)Press "r" for replacing: `)

if(choice=="f"){
    
    let word= prompt("FIND METHOD : \n Enter the word or letter to find :")

    document.write(` <h3>FIND METHOD:</h3> <h4>This is your original string:</h4> <strong>${msg}</strong>  <br>`)

    if (msg.includes(word)){
        document.write(` The word "${word}" is found at index "${msg.indexOf(word)}"`);
       
    }

    else{
        document.write(`The word "${word}" is not found in the message.`);
       
    }
  




}

else if(choice==="r"){
    let word= prompt("Enter the word to find first :")

    document.write(` <h3>Replace Method:</h3> <h4>This is your original string:</h4> <h5>${msg}</h5>`)
        if (msg.includes(word)){
            let replace= prompt("Enter the word to replace with:")
            msg=msg.replaceAll(word,replace);
            document.write(`The word "${word}" is replaced with "${replace}" <br> <br>`);
            document.write(`The final string becomes: <br> ${msg}`);
            

        
    }
    else{
        document.write(`The word "${word}" is not found in the message.`);
    }




}
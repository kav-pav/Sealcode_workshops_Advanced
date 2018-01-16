function main() {
    const x = "Hello world!";
    try{
        const result = run(x);
    }
    catch(e){
        console.log(e.message);
        console.log(e.name);
    }
    if(typeof x === 'string'){
        throw new Error(200,'x jest typu string');
    }
    const result = run(x);
    console.log(x.lowerCase());
}

window.onload = main;
window.onerror = function(msg,url,line){
    console.log(msg);
    console.log(url);
    console.log(line);
}

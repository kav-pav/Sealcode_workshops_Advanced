let $popular_recipes = $(".popular-recipes");
let $nav = $("nav");
let $aside = $("aside");
let $form = $("form");

function exercise($x){
    console.log($x);
    console.log($x.parent());
    console.log($x.closest("section"));
    console.log($x.next());
    console.log($x.prev());
    console.log($x.children());
};

exercise($popular_recipes);
exercise($nav);
exercise($aside);
exercise($form);



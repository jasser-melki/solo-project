var data = [

    {
        name:"cigarette smoke",
        
content:`
In a scary night when the dark devoured everything\n
The words ran away and the silence starts to sing\n
Under its tones, the spirits were dancing in a magical way
And my cigarette smoke was flying so far away
To tell the stars, the moon and the dark sky..
About all the truths that has drowned in a river of a great lie.
But the silence' s song turned into a frightening loudness
The dead spirits stoped to dance, getting back to their continuous sadness
Meanwhile the smoke was flying, crossing all the limits
Taking all the untold stories to a place where everything is real.
-jasser` ,
categorie:'life' },{
        name:"I wish...",
        categorie:"romance",
content:`I wish I could take of all the scars from you.. all your gloomy parts and the dark ghost from your heart to plant them like flowers between the pages of my favourite book...

I wish I could take of all the blue from you and mix it with my yellow to creat a new sort of Vincent Van Gogh art and hang the paintings on my heart's walls...

I wish I could dig a deep hole in your soul to fill it up with all the spring's roses and the magical moonlight to remind you that the spring was made for you and the moon appears every night to watch you...-jasser`    },{
        name:"souls",
        categorie:"hope",
        content:`
        When the rain gave its last kiss to the sea...
        When the last bird lost her nest in the dead tree
        When the ocean gave its last hug to the shore
        And the sun chose not to show up anymore
        When a seaman got wasted and his heart filled up with despair
        When a widow lost her only child in the deadly warfare
        When an innocent prisoner knew he'll pass his life in a cell
        And everyone was frightened after the death's bell
        When the whole world reads the letter that the universe sent
        Thinking that the end is coming after the years they spent
        But when everything was ending souls met
        Because it's not the end yet...
        
        Jasser`
    },{
        name:"after the chaos",
        content:`
        If the grief's mountains around you were falling
        And the gloom's rivers in you were flowing
        Even if the voices in your head left you in tears
        And you were facing, all alone, all your fears
        
        If you were hunted by the blurry memories' shadow
        And the time passes, but the little child in you ain't grow
        Even if the dusky clouds in your sky ain't disappear
        And the moon that was lightning everything won't appear
        
        Never let go... sometimes, you find the real you in the mess
        Sometimes,after getting hurt a lot you'll suffer less
        And all the messy thoughts in your mind will fade away
        Because the soul that suffers a lot will get healed one day 🌅
        _jasser `,
        categorie:"hope"},{
            name:"IF I WERE AN ARTIST",
            categorie:"romance",
            content:`
            If I were an artist and you were mine
            I'll focus on your details under the sunshine
            And draw you under the moonlight..
            Even if the moon won't appear that will be alright
            Because I have a perfect eyesight
            And I'll draw you under a million star's light
            All my colors will have a deadly fight
            And my brush will be the art's sprite
            The black will mix with the white
            And I'll keep drawing you all the night...
            The whole night...
            When everything is peaceful and so quite
            But I'm not an artist and I'll never be one anyway
            So I'll throw my brush and all my colors away
            And keep kissing you all the night...
            The whole night...
            _Jasser`
        },{
            name:"his mind's room",
            content:`
            
            the old room's desk was there before many years
            scribbled, full of unordered papers wetted by tears
            written by the mature man who's crying in its corner
            like a beaten soldier after losing his blessed armor.
            a lot of drawings and pictures were hanging on its wall
            of a little boy, all that he cared about was his dog and pink ball
            Now he's lying on his bed watching what he has become
            an empty person hopelessly waiting for happiness to come
            the window of that room overlooks the whole beautiful sky
            in the daytime, the little boy looks up to blue dreaming to fly
            but when night falls, the man uses to watch the darkness
            filling up his chest with sorrow and a continuous sadness
            -jasser`,
            categorie:'life'
        },{
            name:"December's flower",
            content:`December's flower

            Watered by the winter's rain,
            you were blooming all day.
            Although you missed your precious spring,
            and a thousand birds when they sing,
            you offered December a unique smell
            mixed with thoughts in your mind's cell
            and the sorrow of your heart's hell.
            touched by the winter's sun
            you saw a baby having fun
            heard him loudly saying
            "mom! flowers do only bloom in spring?"
            she said " yes, you're right son"
            you didn't like what you heard
            and you wished she didn' say a word
            because you don't belong to the familiar type
            and you never believe what they think is right
            light is your darkness and darkness is your light
            you bloom in winter and you're dead in spring,
            an angel that still fly although she lost a wing
            -jasser`,
            categorie:"romance"
        },{
            name:"",
            content:`-Escape

            one cut, two cuts, three cuts, and the blood was everywhere
            in her eyes, life was very tough and unfair
            passing her last painful days in her little room
            waiting the long hours for the day of her doom
            
            the terrible voices in her head were scaring her
            a weak person, that's what they want her to be
            telling her, every single moment, about death...
            and won't give up on her till she loses her breath
            
            they made her wondering that dying is the salvation
            from all her grief, and her continuous frustration
            but she was assaying to escape and find the right way
            '' always follow your heart'' her dad said one day
            
            so she ran away from her brother who was always mad
            and her mom who has never cared about the sadness she had
            -jasser`,
            categorie:"grief",
        }
    
    ];

var each = function (coll,func){
    if (Array.isArray(coll)){
        for (var i =0;i<coll.length;i++){
        func(coll[i],i)
    }
    }
    else {
        for (var key in coll){
            func(coll[key],key)
        }
    }
}

var filter = function(array,predicate){
var acc = [];
each(array,function(e,i){
    if (predicate(e,i)){
        acc.push(e)
    }
})
return acc;
}
$("#add").on("click",function (e){
    var poemm=$(".addtext").val();
    var div=$("<div class='grid-item1'></div>");
    var btn=$("<button>remove</button>")
   
    div.addClass("grid-item");
    div.text(poemm);
    btn.appendTo(div);
    $("#container").append(div);
    btn.click(function(){
        $(this).parent().remove();
    });
});
each(data,function(elem,i){
    var div=$("<div></div>")
    div.attr("class","grid-item")
    var btn=$("<button>remove</button>")
    var name = $("<p id='poem'>" + elem.name + "</p>");
    name.appendTo(div);
    var disc=$("<p id='poem'>"+elem.content+"</p>");
    disc.appendTo(div);
    btn.appendTo(div)
    $("#container").append(div)
    btn.click(function(){
        $(this).parent().remove();
    });
})

//search by a word
$(".click").on("click",(function(e) {
    var searchTerm = $(".searchTerm").val();
    var filteredPoems = filter(data, function(poem) {
      return poem.content.includes(searchTerm);
    });
    $("#container").empty()
    each(filteredPoems, function(poem) {
      $("#container").append("<div class='grid-item'>" + poem.name + ": " + poem.content + "</div>");
    });
  }))
  $("#list2").on("change", function(){
    var font = $(this).val();

    $(".grid-item1").css("font-style", font);
});
  //change the color 
$("#list1").on("change", function(){
    var color = $(this).val();
    console.log(color)
    $(".grid-item1").css("color", color);
});
//change the font 



//search by categorie
$("#list").on("click",function (e) {
    var value = $("#list").val();
    var Dataf=filter(data,function(e,i){
        return e.categorie===value
    })
    $("#container").empty()
    each(Dataf,function(elem,i){
        
        var div="<div></div>";
        var disc=$("<p>"+elem.content+"</p>");
        var name=$("<p>"+elem.name+"</p>");
        name.appendTo(div)
        disc.appendTo(div)
        $("#container").append(div)
        $("#container").append('<div class="grid-item">'+elem.content+'</div>')
        })
})//remove the content on clicking
btn.click(function(){
    $(this).parent().remove();
 });

  

  
  

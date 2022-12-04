// accessing object

// prompt(sammy.first_name);

var user_profile = { 
    "username" : "SammyShark",
    "social_media" : [
        {
            "description" : "twitter",
        "link" : "https://twitter.com/digitalocean"
    },
    {
        "description" : "facebook",
        "link" : "https://www.facebook.com/DigitalOceanCloudHosting"
    },
    {
        "description" : "github",
        "link" : "https://github.com/digitalocean"
    }
]
}

alert(user_profile.social_media[1].description);

//   var s = JSON.stringify(sammy);

var s = '{"first_name" : "Sammy", "last_name" : "Shark", "location" : "Ocean"}'

var obj = JSON.parse(s);

  document.getElementById("user").innerHTML = 
  "Name: " + obj.first_name + " " + obj.last_name + "<br>" + 
  "Location: " + obj.location;

  console.log();
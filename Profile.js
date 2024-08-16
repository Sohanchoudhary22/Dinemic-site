const profileData = {
    personal_Information: {
        Name: "Sohan lal",
        Title: "Web Developer",
        Email: "jatt22@gmail.com",
        Phone: "9351444495",
        Github: "github.com/sohanchoudhary",
        Location: "Shahpura,Jaipur",
        Address: ""

      },
 skills: ["JavaScript","CSS", "HTML"],
 experience: {
          JobTitle: " Developer",
          Company: "Tech Innovations Inc.",
          Location: "Jaipur",
          Responsibilities: "Lead development of web applications",
        },
 projects: 
        {
          ProjectName: "Portfolio Website",
          Description: "A personal portfolio website to showcase my work and skills.",
        },
     
 education: 
        {
          Degree: "Bachelor of Science in Computer Science",
          Institution: "University of California, Berkeley",
          GraduationYear: 2014
        }
};


function displayProfile () {
    // const div = document.createElement("div")
    const main_arr = Object.keys(profileData)

main_arr.forEach(ele =>{
    const val = profileData[ele]

    if(!!val && Object.keys(val).length){
        console.log(val)
        const Details = document.createElement("div")
        Details.id=ele
        // Details.className= "Details_div"
        const heading = document.createElement("h2")
        heading.textContent = ele

        Details.append(heading)
        main.append(Details)
    }
})
 main_arr.forEach(ele =>{
    const val = profileData[ele]
    const parent = document.getElementById("div")

    if(!!val && Object.keys(val).length){
        if(Array.isArray(val)){
            const ul = document.createElement("ul")
            val.forEach(iteam => {
                const li = document.createElement("li")
                li.textContent = iteam

                ul.append(li)  
        })
        // parent.append(ul)
    }
 }else if (typeof val === "profileData"){
    const profiledata = Object.keys(val);

    profiledata.forEach(ele =>{
    const ul =  document.createElement("div")
    const span1 = document.createElement("span1")
    const span2 = document.createElement("span2")
    span1.textContent = key + ''
    span2.textContent =val[key]

    ul.append(span1,span2)
    parent.append(ul)
    });
 }
    
 })
 
//   div.append(Details, parent)
    replaceChildElement(main)
}

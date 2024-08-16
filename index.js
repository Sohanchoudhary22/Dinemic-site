const sidebarData = {
    header:"sohan",
    content:[
        {
            key:"dashboard",
            labal:"Dashboard"
        },
        {
            key:"profile",
            labal:"Profile"
        },
        {
            key:"about_us",
            labal:"About us"
        },
        {
            key:"contact_us",
            labal:"Contact us"
        },
        {
            key:"help",
            labal:"Help"
        }
    ]
}
function displaySidebarData() {
       const sidebar = document.getElementById("sidebar")
       const heading = document.createElement("h2")
       heading.textContent = sidebarData.header

       sidebar.append(heading)
       
}
displaySidebarData()

function displaySidebarbutton (){
    const ul = document.createElement("ul")
    sidebarData.content.forEach(btn =>{
        const li = document.createElement("li")
        li.id = btn.key
        const button = document.createElement("button")
        button.id =`${btn.key}_btn`;
        button.textContent = btn.labal
        button.addEventListener("click",()=> handleSidebarBtnClick(btn.key))
         
        li.append(button)
        ul.append(li)
        sidebar.append(ul)
    })

}
displaySidebarbutton ()

function handleSidebarBtnClick(key) {
    // console.log(key);
    
    const pageobj = {
        dashboard: displayDashboard,
        profile: displayProfile,
        about_us : displayAbout,
        contact_us  : displayContact,
        help: displayHelp,
    }
    return pageobj[key]();
}

function getChildElement () {
    return main.firstchild
}
const main=document.getElementById("main")

function replaceChildElement(element){
    const childEle = getChildElement();
    if(childEle){
        main.replaceChild(element,childEle);
    }else{
        main.append(element)
    }
}
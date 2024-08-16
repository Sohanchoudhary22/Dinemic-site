   const dashboardData = {
      header:"Welcome to Site",
      content:[
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

function displayDashboard () {
    const div = document.createElement("div")
    const heading = document.createElement("h1")
    heading.innerText=dashboardData.header
    const div1 = document.createElement("div")
    dashboardData.content.forEach(btn => {
        const button = document.createElement("button")
        button.id = btn.key
        button.textContent = btn.labal
        button.addEventListener("click",()=>handleSidebarBtnClick(btn.key) )
        div1.append(button)
     });
     
     div.append(heading)
    div.append(div1)
    replaceChildElement(div)
}


let sidebar = document.getElementById('mySidebar')
let main = document.getElementById('main')
function opeNav()
{
    sidebar.style.width = '250px'
    main.style.marginLeft = '250px'
}

function closeNav()
{
    sidebar.style.width = '0'
    main.style.marginLeft = '0'
}


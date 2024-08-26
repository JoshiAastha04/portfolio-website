

/*-------- ABOUT TABS ---------*/
const tabsConatiner = document.querySelector(".about-tabs"),
aboutSection = document.querySelector(".about-section");
tabsConatiner.addEventListner("click", (e) => {
	if(e.target.classList.contains("tab-item") && !e.target.classList.contains("actvie")){
		tabsContainer.querySelector(".active").classList.remove("active");
		e.target.classList.add("active");
		constc target = e.target.getAttribute("data-target")
		console.log(target);
		aboutSection.querySelector(".tab-content.active").classList.remove("active");
		aboutSection.querySelector(target).classList.add("active");
	}
});
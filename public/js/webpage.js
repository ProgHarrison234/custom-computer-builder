// click handlers for dropdowns
// click handlers menu buttons
// save buttons
// Need footer buttons
// disable all dropdowns until radio buttons are clicked
// create the display of parts on the side

$(".radio-btn").on("click", function () {


    console.log(this)
    let category = $(this).attr("id");
    let componentName = [
        "CPU-cooler",
        "CPU",
        "Motherboard",
        "RAM",
        "Storage",
        "GPU",
        "PSU",
        "Case"
    ]
    for (let j = 0; j < componentName.length; j++) {
        $(`[id = '${componentName[j]}'`).empty();
    }

    $.get("/api/components/" + category, (data) => {
        console.log(data);
        console.log(componentName);
        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < componentName.length; j++)
                if (data[i].component === componentName[j]) {
                    $(`[id = '${componentName[j]}'`).append(`<a class="dropdown-item" title = "${data[i].description}">
                ${data[i].description} - $${data[i].price}
              </a>`);
                }
        }
    })
});
// $("#workstation-pc").on("click", () => {

//     console.log("workstation")
//     let componentName = [
//         "CPU-cooler",
//         "CPU",
//         "Motherboard",
//         "RAM",
//         "Storage",
//         "GPU",
//         "PSU",
//         "Case"
//     ]
//     for (let j = 0; j < componentName.length; j++) {
//         $(`[id = '${componentName[j]}'`).empty();
//     }

//     $.get("/api/components/workstation", (data) => {
//         console.log(data);
//         console.log(componentName);
//         for (let i = 0; i < data.length; i++) {
//             for (let j = 0; j < componentName.length; j++) {
//             if (data[i].component === componentName[j]) {
//                 console.log(data[i].description);
//                 $(`[id = '${componentName[j]}'`).append(`<a class="dropdown-item">
//                 ${data[i].description} - $${data[i].price}
//               </a>`);
//             }
//         }
//     }

//     })
// });
// $("#ht-pc").on("click", () => {

//     console.log("home theater")
//     let componentName = [
//         "CPU-cooler",
//         "CPU",
//         "Motherboard",
//         "RAM",
//         "Storage",
//         "GPU",
//         "PSU",
//         "Case"
//     ]
//     for (let j = 0; j < componentName.length; j++) {
//         $(`[id = '${componentName[j]}'`).empty();
//     }

//     $.get("/api/components/home_theater", (data) => {
//         console.log(data);
//         console.log(componentName);
//         for (let i = 0; i < data.length; i++) {
//             for (let j = 0; j < componentName.length; j++)
//             if (data[i].component === componentName[j]) {
//                 console.log(data[i].description);
//                 $(`[id = '${componentName[j]}'`).append(`<a class="dropdown-item">
//                 ${data[i].description} - $${data[i].price}
//               </a>`);
//             }
//         }
//     })
// });


// fixing the dropdown. It is not wanting to work. I feel like either bulma has a js file to attach or I am using "this" wrong. Currently, everytime i click the dropdown, it says it is not active and they all still are active. continue looking through bulma
// or ask learning assitants or ask the class. Maybe the others will know too. Depends on when you get back in accordance with when you jump on the zoom call. Also recommend adding all the CPUs(including the duplicates) in with specific pcTypes and others with all true.
$(".dropdown-trigger").on("click", function () {
    if ($(this).parent(".dropdown").hasClass("is-active")) {
        $(this).parent(".dropdown").removeClass("is-active")
    }
    else {
        $(this).parent(".dropdown").addClass("is-active")
    }

    $(".dropdown-item").on("click", function () {
        console.log($(this).attr("title"));
        let componentTitle = $(this).attr("title");

        // currently working on getting the columns to line up  
        // top 2 PSU dont work
        
        $.get("/api/description/" + componentTitle, function (data) {
            let compName = data[0].component;
            $(`.${compName}`).empty();
            console.log(compName);
            $(`.${compName}`).append(`<div class="columns"> 
                <div class="column"></div>
                <div class="column is-3"> 
                    <div id="chosen-comp" class="chosen" style="0%">${compName}</div> 
                </div>
                <div class="column is-7">
                    <div class="chosen">${data[0].description}</div>
                </div>
                <div class="column is-4">
                    <div class="chosen">${data[0].manufacturer}</div>
                </div>
                <div class="column is-3"> 
                    <div class="chosen is-3">${data[0].price}</div>
                </div>
                <div class="column"> 
                    <div class="chosen"><input type="checkbox"></div>
                </div>
            </div>`);
        })
        $(this).parents(".dropdown").removeClass("is-active")
    })
})



function Search() {
    debugger;
    document.getElementById("suggestion").innerHTML = "";

    var names = ["Ragul", "Rajpreet", "Pallvi", "Neha", "Ankita", "Raja", "Shreea", "Smriti", "Shrijeet", "Ayush", "Swapnil", "Nihit", "Bhargavi", "Anushka", "Swinal", "Utkarsh", "Saurabh", "Paarth", "Vishwas", "Mohit", "Gurbaksh", "Ashwarya"];      
    names.sort();
    var countOfCharMatching = 0;
    var isCharPresent = "", listData = "";
    var currentArrayName = ""; 
        var inputBox = document.getElementById("input").value;
        var initialSuggestions = "";
        if(inputBox.length>0)
        {
        for (i = 0; i < names.length; i++) { 

            currentArrayName = names[i].toUpperCase();
            currentInputBoxValue = inputBox.toUpperCase();

            if(inputBox.length > 0)
                isCharPresent = currentArrayName.includes(currentInputBoxValue);

            if(isCharPresent === true) {
                listData = "<li id='"+i+"'  onclick='clickOnList(this.innerHTML)'>"+ names[i] + "</li>";
                document.getElementById("suggestion").innerHTML =initialSuggestions + listData;
                countOfCharMatching = countOfCharMatching + 1;
                initialSuggestions = document.getElementById("suggestion").innerHTML;
            }
        }
        if(document.getElementById("suggestion").innerHTML.length == "")
        {
            document.getElementById("suggestion").innerHTML = "No suggestions ";
        }
    }
}


function clickOnList(valueOfList) {
    document.getElementById("input").value = valueOfList;
    document.getElementById("suggestion").innerHTML = "";
}

function goOnPage() {
    document.getElementById("suggestion").innerHTML = "";
}

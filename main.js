function displayPosition(company, title, description) {
    console.log("* " + company + ": " + title + "-" + description);
}

function displaySkill(skill, isCool) {
    if (isCool) {
        console.log("* BAM: " + skill);
    } else {
        console.log("* " + skill);
    }
}

let nameLabel = "name";
let upper = nameLabel.toUpperCase();
console.log(upper + ": Cordell Rainock");
console.log("Career: Entrepreneur");
console.log("Description : BYU Business Strategy Alumni and Entrepreneur");
console.log(" ");
console.log("My Interests:");
console.log("* songwriting");
console.log("* grilling");
console.log("* mountain biking");
console.log("* golf");
console.log(" ");
console.log("My Previous Experience:");
displayPosition("Archeio Systems", "Owner", "an archive imaging technology company");
displayPosition("Intel", "Pricing Analyst","performed pricing analysis");
displayPosition("BYU", "TA", "business communications class");
console.log(" ");
console.log("My Skills:");
displaySkill("UX/UI", true);
displaySkill("economic/strategic analysis", true);
displaySkill("HTML, CSS", false);
displaySkill("Excel, PowerPoint, Word", false);
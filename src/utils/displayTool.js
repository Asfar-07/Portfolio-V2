export function displayTool(tools){
    const defaultTool=[
            "Java",
            "SpringBoot",
            "reactJs",
            "TypeScript",
            "JavaScript",
            "CSS",
            "TailwindCSS",
            "mysql",
            "mongodb",
            "nextJs",
            "threeJs"
            ]
    let result = "";
    tools.forEach((tool) => {
        if (
            defaultTool.some(
                (d) =>
                    d.replaceAll(" ", "").toLowerCase() ===
                    tool.replaceAll(" ", "").toLowerCase()
            )
        ) {
            result += `<div class="w-12 h-12 p-2 bg-[#ffffff] rounded-lg cursor-pointer" title="${tool}">
                <img src="/images/icons/${tool.replaceAll(" ", "").toLowerCase()}.svg" alt="${tool}" class="size-full"/>
                    </div>`;
        }
    })
    return result;
}
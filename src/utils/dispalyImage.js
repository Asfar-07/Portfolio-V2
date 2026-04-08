export function displayImage(path,typeDisplay){
     if (typeDisplay === "video") {
    return `
      <video autoplay loop muted preload="none" class="size-full rounded-md">
        <source src="${path}.webm" type="video/webm">
        <source src="${path}.mp4" type="video/mp4">
      </video>
    `;
  } else {
    return `
      <img src="${path}" alt="web" class="size-full rounded-md object-cover" loading="lazy">
    `;
  }
}
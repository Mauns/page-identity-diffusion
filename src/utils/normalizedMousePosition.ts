export const normalizedMousePosition = (event: MouseEvent, container: HTMLElement): number => {
    const containerWidth = container.clientWidth;
    const halfContainerWidth = containerWidth / 2;
    const cursorPosition = event.clientX - container.getBoundingClientRect().left;
    const normalizedPosition = (cursorPosition - halfContainerWidth) / halfContainerWidth;
    return Math.max(-1, Math.min(normalizedPosition, 1));
}

  // Example usage:
//   const container = document.getElementById('container');
//   container.addEventListener('mousemove', (event: MouseEvent) => {
//     const normalizedPosition = normalizedMousePosition(event, container);
//     // Do something with the normalized position, such as update the UI
//   });

document.addEventListener('DOMContentLoaded', function () {
   const flexContainer = document.getElementById('flex-container');
   const flexDirection = document.getElementById('flex-direction');
   const justifyContent = document.getElementById('justify-content');
   const alignItems = document.getElementById('align-items');
   function updateFlexbox() {
       flexContainer.style.flexDirection = flexDirection.value;
       flexContainer.style.justifyContent = justifyContent.value;
       flexContainer.style.alignItems = alignItems.value;
   }
   flexDirection.addEventListener('change', updateFlexbox);
   justifyContent.addEventListener('change', updateFlexbox);
   alignItems.addEventListener('change', updateFlexbox);
   // Initial update
   updateFlexbox();
});

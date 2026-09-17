document.addEventListener('DOMContentLoaded', () => {
  const dialogs = document.querySelectorAll('.modal');
  const openButtons = document.querySelectorAll('[data-modal-target]');

  const closeDialog = (dialog) => {
    if (dialog?.open) {
      dialog.close();
    }
  };

  openButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const dialog = document.getElementById(button.dataset.modalTarget);

      if (dialog) {
        dialog.showModal();
      }
    });
  });

  dialogs.forEach((dialog) => {
    const closeButton = dialog.querySelector('.modal-close');
    const form = dialog.querySelector('form');

    closeButton?.addEventListener('click', () => closeDialog(dialog));

    dialog.addEventListener('click', (event) => {
      if (event.target === dialog) {
        closeDialog(dialog);
      }
    });

    form?.addEventListener('submit', (event) => {
      event.preventDefault();
      form.reset();
      closeDialog(dialog);
    });
  });
});

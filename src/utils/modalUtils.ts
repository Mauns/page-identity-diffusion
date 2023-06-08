// Assuming you have a nanostore instance called 'store' with a state property called 'modalOpen'
// and an array of elements called 'elements' with each element having a 'content' property
import { $showModal, $modalContent } from "./store"

export const toggleModal = (contentId) => {
    // Set the content of the modal to the content of the clicked element
    // $modalContent.set('modalContent', element.content)
    // Toggle the modal open state

    if (contentId !== undefined || contentId !== PointerEvent) {
        $modalContent.set(contentId)
    } else {
        $modalContent.set("p1")
    }

    $showModal.set(!$showModal.get())
}

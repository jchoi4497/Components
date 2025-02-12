import Modal from '../components/Modal'
import Button from '../components/Button'
import { useState } from 'react'

function ModalPage() {
    const [showModal, setShowModal] = useState(false)

    const handleClick = () => {
        setShowModal(true)
    }

    const handleClose = () => {
        setShowModal(false)
    }
   
    const actionBar = (
    <div>
        <Button onClick={handleClose} primary>I Accept</Button>
    </div>
    )

    const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
        <p>
            Here is an important agreement for you to accept
        </p>
    </Modal>
    )

    return (
    <div>
        <Button onClick={handleClick} primary>Open Modal</Button>
        {showModal && modal}
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel gravida lacus, a fermentum ipsum. Quisque luctus mattis est, quis bibendum quam luctus id. Donec consectetur nibh in lacinia consequat. Quisque id interdum tellus. Donec eleifend tellus at pretium sodales. Fusce tincidunt tellus non scelerisque vulputate. Etiam molestie interdum sapien, sed interdum orci hendrerit maximus. Vestibulum volutpat leo elit, sit amet aliquam orci iaculis sed. Aenean efficitur ligula ac aliquam molestie. Sed blandit dui sit amet justo euismod, nec cursus ligula vulputate. Mauris turpis tellus, sodales sed luctus a, accumsan non magna. Praesent non finibus ligula. Nunc ornare, purus at pulvinar dapibus, est turpis pretium erat, et dignissim neque arcu vel diam. Donec eu interdum lacus, eu finibus erat. Morbi non tincidunt lectus. Nulla facilisi.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel gravida lacus, a fermentum ipsum. Quisque luctus mattis est, quis bibendum quam luctus id. Donec consectetur nibh in lacinia consequat. Quisque id interdum tellus. Donec eleifend tellus at pretium sodales. Fusce tincidunt tellus non scelerisque vulputate. Etiam molestie interdum sapien, sed interdum orci hendrerit maximus. Vestibulum volutpat leo elit, sit amet aliquam orci iaculis sed. Aenean efficitur ligula ac aliquam molestie. Sed blandit dui sit amet justo euismod, nec cursus ligula vulputate. Mauris turpis tellus, sodales sed luctus a, accumsan non magna. Praesent non finibus ligula. Nunc ornare, purus at pulvinar dapibus, est turpis pretium erat, et dignissim neque arcu vel diam. Donec eu interdum lacus, eu finibus erat. Morbi non tincidunt lectus. Nulla facilisi.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel gravida lacus, a fermentum ipsum. Quisque luctus mattis est, quis bibendum quam luctus id. Donec consectetur nibh in lacinia consequat. Quisque id interdum tellus. Donec eleifend tellus at pretium sodales. Fusce tincidunt tellus non scelerisque vulputate. Etiam molestie interdum sapien, sed interdum orci hendrerit maximus. Vestibulum volutpat leo elit, sit amet aliquam orci iaculis sed. Aenean efficitur ligula ac aliquam molestie. Sed blandit dui sit amet justo euismod, nec cursus ligula vulputate. Mauris turpis tellus, sodales sed luctus a, accumsan non magna. Praesent non finibus ligula. Nunc ornare, purus at pulvinar dapibus, est turpis pretium erat, et dignissim neque arcu vel diam. Donec eu interdum lacus, eu finibus erat. Morbi non tincidunt lectus. Nulla facilisi.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel gravida lacus, a fermentum ipsum. Quisque luctus mattis est, quis bibendum quam luctus id. Donec consectetur nibh in lacinia consequat. Quisque id interdum tellus. Donec eleifend tellus at pretium sodales. Fusce tincidunt tellus non scelerisque vulputate. Etiam molestie interdum sapien, sed interdum orci hendrerit maximus. Vestibulum volutpat leo elit, sit amet aliquam orci iaculis sed. Aenean efficitur ligula ac aliquam molestie. Sed blandit dui sit amet justo euismod, nec cursus ligula vulputate. Mauris turpis tellus, sodales sed luctus a, accumsan non magna. Praesent non finibus ligula. Nunc ornare, purus at pulvinar dapibus, est turpis pretium erat, et dignissim neque arcu vel diam. Donec eu interdum lacus, eu finibus erat. Morbi non tincidunt lectus. Nulla facilisi.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel gravida lacus, a fermentum ipsum. Quisque luctus mattis est, quis bibendum quam luctus id. Donec consectetur nibh in lacinia consequat. Quisque id interdum tellus. Donec eleifend tellus at pretium sodales. Fusce tincidunt tellus non scelerisque vulputate. Etiam molestie interdum sapien, sed interdum orci hendrerit maximus. Vestibulum volutpat leo elit, sit amet aliquam orci iaculis sed. Aenean efficitur ligula ac aliquam molestie. Sed blandit dui sit amet justo euismod, nec cursus ligula vulputate. Mauris turpis tellus, sodales sed luctus a, accumsan non magna. Praesent non finibus ligula. Nunc ornare, purus at pulvinar dapibus, est turpis pretium erat, et dignissim neque arcu vel diam. Donec eu interdum lacus, eu finibus erat. Morbi non tincidunt lectus. Nulla facilisi.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel gravida lacus, a fermentum ipsum. Quisque luctus mattis est, quis bibendum quam luctus id. Donec consectetur nibh in lacinia consequat. Quisque id interdum tellus. Donec eleifend tellus at pretium sodales. Fusce tincidunt tellus non scelerisque vulputate. Etiam molestie interdum sapien, sed interdum orci hendrerit maximus. Vestibulum volutpat leo elit, sit amet aliquam orci iaculis sed. Aenean efficitur ligula ac aliquam molestie. Sed blandit dui sit amet justo euismod, nec cursus ligula vulputate. Mauris turpis tellus, sodales sed luctus a, accumsan non magna. Praesent non finibus ligula. Nunc ornare, purus at pulvinar dapibus, est turpis pretium erat, et dignissim neque arcu vel diam. Donec eu interdum lacus, eu finibus erat. Morbi non tincidunt lectus. Nulla facilisi.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel gravida lacus, a fermentum ipsum. Quisque luctus mattis est, quis bibendum quam luctus id. Donec consectetur nibh in lacinia consequat. Quisque id interdum tellus. Donec eleifend tellus at pretium sodales. Fusce tincidunt tellus non scelerisque vulputate. Etiam molestie interdum sapien, sed interdum orci hendrerit maximus. Vestibulum volutpat leo elit, sit amet aliquam orci iaculis sed. Aenean efficitur ligula ac aliquam molestie. Sed blandit dui sit amet justo euismod, nec cursus ligula vulputate. Mauris turpis tellus, sodales sed luctus a, accumsan non magna. Praesent non finibus ligula. Nunc ornare, purus at pulvinar dapibus, est turpis pretium erat, et dignissim neque arcu vel diam. Donec eu interdum lacus, eu finibus erat. Morbi non tincidunt lectus. Nulla facilisi.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel gravida lacus, a fermentum ipsum. Quisque luctus mattis est, quis bibendum quam luctus id. Donec consectetur nibh in lacinia consequat. Quisque id interdum tellus. Donec eleifend tellus at pretium sodales. Fusce tincidunt tellus non scelerisque vulputate. Etiam molestie interdum sapien, sed interdum orci hendrerit maximus. Vestibulum volutpat leo elit, sit amet aliquam orci iaculis sed. Aenean efficitur ligula ac aliquam molestie. Sed blandit dui sit amet justo euismod, nec cursus ligula vulputate. Mauris turpis tellus, sodales sed luctus a, accumsan non magna. Praesent non finibus ligula. Nunc ornare, purus at pulvinar dapibus, est turpis pretium erat, et dignissim neque arcu vel diam. Donec eu interdum lacus, eu finibus erat. Morbi non tincidunt lectus. Nulla facilisi.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel gravida lacus, a fermentum ipsum. Quisque luctus mattis est, quis bibendum quam luctus id. Donec consectetur nibh in lacinia consequat. Quisque id interdum tellus. Donec eleifend tellus at pretium sodales. Fusce tincidunt tellus non scelerisque vulputate. Etiam molestie interdum sapien, sed interdum orci hendrerit maximus. Vestibulum volutpat leo elit, sit amet aliquam orci iaculis sed. Aenean efficitur ligula ac aliquam molestie. Sed blandit dui sit amet justo euismod, nec cursus ligula vulputate. Mauris turpis tellus, sodales sed luctus a, accumsan non magna. Praesent non finibus ligula. Nunc ornare, purus at pulvinar dapibus, est turpis pretium erat, et dignissim neque arcu vel diam. Donec eu interdum lacus, eu finibus erat. Morbi non tincidunt lectus. Nulla facilisi.</p>
    </div>
    )
}

export default ModalPage
import React from 'react'
import styles from './Modal.module.css'

export default function Modal (props) {
    
    return (
        <div className={props.show?styles.modalActive:styles.modal}>
            {props.children}
        </div>
    ) 
}  

export function ModalHeader (props){
    return (
        <div className={styles.header}>
            {props.children}
        </div>
    )
}

export function ModalBody (props){
    return (
        <div className={styles.body}>
            {props.children}
        </div>
    )
}

export function ModalFooter (props){
    return (
        <div className={styles.footer}>
            {props.children}
        </div>
    )
}
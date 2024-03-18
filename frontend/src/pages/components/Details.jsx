import styles from './Details.module.css'
function Details({book}){
    return (
        <div className={styles.book_details} >
            
            <div className={styles.book_content}>
                <span className={styles.text_title}>Name</span>
                <span className={styles.text_value}>{book.name}</span>
            </div>


            <div className={styles.book_content}>
                <span className={styles.text_title}>Price</span>
                <span className={styles.text_value}>{book.price}</span>
            </div>

            <div className={styles.book_content}>
                <span className={styles.text_title}>Created</span>
                <span className={styles.text_value}>{new Date (book.createdAt).toLocaleString()}</span>

            </div>

            <div className={styles.book_content}>
                <span  className={styles.text_title}>Updated </span>
                <span  className={styles.text_value}>{new Date (book.updatedAt).toLocaleString()}</span>

            </div>


        </div>
    )
}
export default Details
import Image from "next/image";
import Link from "next/link";
import styles from "@/app/ui/dashboard/products/products.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";

const ProductsPage = async ({ searchParams }) => {

  return (
      <div className={styles.container}>
        <div className={styles.top}>
          <Search placeholder="Search for a product..." />
          <Link href="/dashboard/products/add">
            <button className={styles.addButton}>Add New</button>
          </Link>
        </div>
        <table className={styles.table}>
          <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
          </thead>
          <tbody>
              <tr>
                <td>
                  <div className={styles.product}>
                    <Image
                        src={"/noproduct.jpg"}
                        alt=""
                        width={40}
                        height={40}
                        className={styles.productImage}
                    />
                    Iphone 12 pro
                  </div>
                </td>
                <td>Iphone 12 pro is uae version</td>
                <td>$1200</td>
                <td>12.08.2023</td>
                <td>5</td>
                <td>
                  <div className={styles.buttons}>
                    <Link href={`/dashboard/products/${1}`}>
                      <button className={`${styles.button} ${styles.view}`}>
                        View
                      </button>
                    </Link>
                    <form>
                      <input type="hidden" name="id" value="1" />
                      <button className={`${styles.button} ${styles.delete}`}>
                        Delete
                      </button>
                    </form>
                  </div>
                </td>
              </tr>
          </tbody>
        </table>
        <Pagination count={5} />
      </div>
  );
};

export default ProductsPage;

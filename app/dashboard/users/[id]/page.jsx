
import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

const SingleUserPage = async ({ params }) => {

    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src={"/noavatar.png"} alt="" fill />
                </div>
                Admin
            </div>
            <div className={styles.formContainer}>
                <form className={styles.form}>
                    <input type="hidden" name="id" value={"1"}/>
                    <label>Username</label>
                    <input type="text" name="username" placeholder={"admin"} />
                    <label>Email</label>
                    <input type="email" name="email" placeholder={"admin@gail.com"} />
                    <label>Password</label>
                    <input type="password" name="password" />
                    <label>Phone</label>
                    <input type="text" name="phone" placeholder={"055698754"} />
                    <label>Address</label>
                    <textarea type="text" name="address" placeholder={"dubai uae"} />
                    <label>Is Admin?</label>
                    <select name="isAdmin" id="isAdmin">
                        <option value={true} selected={"admin"}>Yes</option>
                        <option value={false} selected={""}>No</option>
                    </select>
                    <label>Is Active?</label>
                    <select name="isActive" id="isActive">
                        <option value={true} selected={"isActive"}>Yes</option>
                        <option value={false} selected={""}>No</option>
                    </select>
                    <button>Update</button>
                </form>
            </div>
        </div>
    );
};

export default SingleUserPage;

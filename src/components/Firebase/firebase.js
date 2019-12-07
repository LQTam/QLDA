import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyAUiB9zPQOu5p1m6ZSQ4ttQP1G_xrrVMV4",
    authDomain: "luudulieunguoidung.firebaseapp.com",
    databaseURL: "https://luudulieunguoidung.firebaseio.com",
    projectId: "luudulieunguoidung",
    storageBucket: "luudulieunguoidung.appspot.com",
    messagingSenderId: "1061601470698",
    appId: "1:1061601470698:web:807744e3e4265fb3e48f93"
  };

  

  // Initialize Firebase
  class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);
        // firebase.analytics();
        this.auth = app.auth();
        this.db = app.database();
        this.providers = {
            googleProvider : new app.auth.GoogleAuthProvider(),
        }
    }
    
    doCreateUserWithEmailAndPassword = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);
    doSignInWithEmailAndPassword = async (email, password) => {
        await app.auth().setPersistence(app.auth.Auth.Persistence.SESSION)
        .then(()=>{
            return this.auth.signInWithEmailAndPassword(email,password);
        })
    };
    doSignInWithGoogle = () => this.auth.signInWithPopup(this.providers.googleProvider);
    doSignOut = () => this.auth.signOut();
    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
    doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);

    user = uid => this.db.ref(`users/${uid}`);
    users = () => this.db.ref('users');
    customers = () => this.db.ref('KhachHang');
    customer = uid => this.db.ref(`KhachHang/${uid}`);

    onAuthUserListener = (next, fallback) =>
        this.auth.onAuthStateChanged(authUser => {
            if (authUser) {
                this.user(authUser.uid)
                    .once('value')
                    .then(snap => {
                        const dbUser = snap.val();

                        if (!dbUser.roles) {
                            dbUser.roles = [];
                        }

                        authUser = {
                            uid: authUser.uid,
                            email: authUser.email,
                            ...dbUser,
                        }

                        next(authUser);
                    });
            } else {
                fallback();
            }
        })

    
}

export default Firebase;
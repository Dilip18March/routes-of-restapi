import express from 'express';
const router = express.Router();
import { registerController, loginController, userController,refreshController,productController ,tradecontroller} from '../controllers';
import { auth } from '../middlewares';
import { admin } from '../middlewares';

router.post('/register', registerController.register);

router.post('/login', loginController.login);

router.get('/user', auth, userController.user);

router.post('/refresh', refreshController.refresh)

router.post('/logout', auth, loginController.logout)


router.post('/product', [auth, admin], productController.store)

router.put('/update/:id', [auth, admin], productController.update)

router.delete('/distroy/:id', [auth, admin], productController.distroy)

router.get('/list', productController.list)


router.get('/search/:id', productController.search)

router.post('/trades', tradecontroller.trades);








export default router;
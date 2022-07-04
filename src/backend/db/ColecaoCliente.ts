import { db } from "../config";
import Cliente from "../../core/Cliente";
import ClienteRepositorio from "../ClienteRepositorio";
import { addDoc, collection, deleteDoc, doc, getDocs, setDoc } from 'firebase/firestore'

export default class ColecaoCliente implements ClienteRepositorio {
  userCollectionRef = collection(db, "clientes")

  async savar(cliente: Cliente): Promise<any> {
    let user
    if (cliente?.id) {
      user = await setDoc(doc(this.userCollectionRef, cliente.id), {
        nome: cliente.nome,
        idade: cliente.idade
      })
    } else {
      user = await addDoc(this.userCollectionRef, {
        id: cliente?.id,
        nome: cliente.nome,
        idade: cliente.idade,
      })
    }

    return user
  }
  async excluir(cliente: Cliente): Promise<void> {
    const userDoc = doc(db, "clientes", cliente.id)
    await deleteDoc(userDoc)
  }
  async obterTodos(): Promise<any> {
    const query = await this.colecao() ?? []
    return query
  }

  colecao = async () => {
    const data = await getDocs(this.userCollectionRef)
    return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
  }
}
import { db } from "@/lib/firebase";
import { collection, query, where, getDocs, doc, getDoc } from "firebase/firestore";
import { RepairTicket } from "@/types";

const REPAIRS_COLLECTION = "repair_tickets";

// Track ticket by ID
export async function getTicketById(ticketId: string): Promise<RepairTicket | null> {
  try {
    const docRef = doc(db, REPAIRS_COLLECTION, ticketId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() } as RepairTicket;
    }
    return null;
  } catch (error) {
    console.error("Error fetching ticket by ID:", error);
    throw error;
  }
}

// Track tickets by Customer Phone Number
export async function getTicketsByPhone(phone: string): Promise<RepairTicket[]> {
  try {
    const q = query(collection(db, REPAIRS_COLLECTION), where("customerPhone", "==", phone));
    const querySnapshot = await getDocs(q);
    
    const results: RepairTicket[] = [];
    querySnapshot.forEach((doc) => {
      results.push({ id: doc.id, ...doc.data() } as RepairTicket);
    });
    
    return results;
  } catch (error) {
    console.error("Error fetching tickets by phone:", error);
    throw error;
  }
}

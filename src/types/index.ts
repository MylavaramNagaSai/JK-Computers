export type RepairStatus = 
  | 'Received'
  | 'Diagnosing'
  | 'Awaiting Parts'
  | 'In Repair'
  | 'Testing'
  | 'Ready for Pickup'
  | 'Delivered';

export interface RepairTicket {
  id: string;
  customerName: string;
  customerPhone: string;
  deviceType: 'Laptop' | 'Desktop' | 'Printer' | 'Other';
  brandModel: string;
  reportedIssue: string;
  branchId: 'trunk-road' | 'vrc-centre' | 'dell-exclusive';
  status: RepairStatus;
  estimatedCost?: number;
  createdAt: string;
  updatedAt: string;
}

export interface BranchInfo {
  id: string;
  name: string;
  type: 'Main Branch' | 'Service Center' | 'Dell Exclusive Store';
  address: string;
  landmark: string;
  phone: string;
  whatsapp: string;
  mapsUrl: string;
  workingHours: string;
}

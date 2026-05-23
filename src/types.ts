export interface WaitlistEntry {
  email: string;
  referralCode: string;
  referralCount: number;
  position: number;
}

export interface ComplianceIssue {
  id: string;
  type: 'voice' | 'reused' | 'template';
  severity: 'high' | 'medium' | 'low';
  title: string;
  description: string;
}

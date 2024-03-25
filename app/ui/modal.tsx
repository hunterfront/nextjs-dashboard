import Link from 'next/link';

export default function Modal({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="rounded-lg bg-white p-8 shadow-lg">
        <div className="text-gray-700">{children}</div>
        <Link href={'/newpage'}>close modal</Link>
      </div>
    </div>
  );
}

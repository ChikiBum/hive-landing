export function format(wallet: string): string | null {
  const walletArr = wallet.split('');

  const start = walletArr.splice(0, 5);
  const end = walletArr.splice(walletArr.length - 4, 4);

  return [...start, '.....', ...end].join('');
}

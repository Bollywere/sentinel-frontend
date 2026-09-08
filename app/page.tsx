// TODO(#issue): this reads from hardcoded mock data, not the backend
// /events endpoint. No loading state, no error state, no wallet connect.
const mockEvents = [
  { address: "GABC...WXYZ", score: 82, flagged: true },
  { address: "GDEF...UVWX", score: 21, flagged: false },
];

export default function DashboardPage() {
  return (
    <main>
      <h1>SoroSentinel Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>Address</th>
            <th>Risk score</th>
            <th>Flagged</th>
          </tr>
        </thead>
        <tbody>
          {mockEvents.map((e) => (
            <tr key={e.address}>
              <td>{e.address}</td>
              <td>{e.score}</td>
              <td>{e.flagged ? "yes" : "no"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

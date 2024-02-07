import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        <h1>Overview</h1>
        <dl>
          <dt>Headings</dt>
          <dd>h1 to h6 tags </dd>
          <dd>Size and prominence decreases by tag value</dd>
          <dd>Jump to Activity 1</dd>

          <dt>Tables</dt>
          <dd>table columns </dd>
          <dd>size and styling</dd>
          <dd>cells and styling</dd>

          <dt>Text</dt>
          <dd>p tags</dd>
          <dd>styling </dd>

          <dt>Forms</dt>
          <dd>- Refer to Overview</dd>

          <dt>ETC ETC</dt>
          <dd>A lot more html tags</dd>
        </dl>

        {/* Activity 1: Header Tags h1-h6 */}
        <h1>CLASS HEADER h1 tag</h1>
        <p>comment out below heading tags and compare</p>
        {/* <h2>CLASS HEADER h2 tag</h2>
        <h3>CLASS HEADER h3 tag</h3>
        <h4>CLASS HEADER h4 tag</h4>
        <h5>CLASS HEADER h5 tag</h5>
        <h6>CLASS HEADER h6 tag</h6>
        <h7>CLASS HEADER h7 tag</h7> */}
        {/* Activity 2: Tables */}

        <h1>table tag</h1>
        <p>comment out below table tags</p>
        <div></div>

        {/* <table className="table1">
          <tr>
            <th className="tabel1_th"> Name </th>
            <th className="tabel1_th"> Email </th>
            <th className="tabel1_th"> HomeTown </th>
          </tr>
          <tr>
            <td className="tabel1_td">Zachary</td>
            <td className="tabel1_td">zac@gmail.com</td>
            <td className="tabel1_td">Busia</td>
          </tr>
          <tr>
            <td className="tabel1_td">Joan</td>
            <td className="tabel1_td">joan@gmail.com</td>
            <td className="tabel1_td">Embu</td>
          </tr>
          <tr>
            <td className="tabel1_td">Sam</td>
            <td className="tabel1_td">sam@gmail.com</td>
            <td className="tabel1_td">Kisumu</td>
          </tr>
          <tr>
            <td className="tabel1_td">Ann</td>
            <td className="tabel1_td">ann@gmail.com</td>
            <td className="tabel1_td">Narok</td>
          </tr>
        </table> */}

        <h1>a tags for links</h1>

        {/* <p>Spend some time learn more HTML.</p>
        <a
          className="App-link"
          href="https://www.w3schools.com/html/default.asp"
          target="_blank"
          rel="noopener noreferrer"
        >
          W3Schools HTML Page
        </a> */}
      </header>
    </div>
  );
}

export default App;

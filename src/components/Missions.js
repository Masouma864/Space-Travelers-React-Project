import Missionscard from './Missionscard';

const Missionlist = () => {

    return (
      <section>
        <table>
          <tbody>
            <tr>
              <td className="table-header"><strong>Mission</strong></td>
              <td className="table-header"><strong>Description</strong></td>
              <td className="table-header"><strong>Status</strong></td>
              <td className="table-header">&nbsp;</td>
            </tr>
            <Missionscard/>
          </tbody>
        </table>
      </section>
    );
}

export default Missionlist;
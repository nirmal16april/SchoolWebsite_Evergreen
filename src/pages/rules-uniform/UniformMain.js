import React from 'react';
import AboutInnerPage from '../about/AboutInnerPage';

const UniformMain = () => {
  return (
    <AboutInnerPage
      breadcrumbTitle="School Uniform"
      breadcrumbSub="Rules"
      eyebrow="Rules"
      title="School Uniform"
      greyBg={false}
    >
      <div className="rules-page">
        <div className="rules-lead">
          <p className="mb-0">
            Students are expected to wear the prescribed uniform neatly and with
            pride. Details for girls, boys, and P.T. dress are given below.
          </p>
        </div>

        <div className="rules-subsection">
          <h4 className="rules-subtitle">Girls — up to Class V</h4>
          <div className="table-responsive mb-30">
            <table className="disclosure-table">
              <tbody>
                <tr>
                  <td>Shirt</td>
                  <td>Blue with yellow and red collar with arm band</td>
                </tr>
                <tr>
                  <td>Skirts</td>
                  <td>Navy blue with red and yellow stripes</td>
                </tr>
                <tr>
                  <td>Shoes</td>
                  <td>Black leather</td>
                </tr>
                <tr>
                  <td>Socks</td>
                  <td>Navy blue with two yellow stripes</td>
                </tr>
                <tr>
                  <td>Jersey</td>
                  <td>Navy blue with yellow stripes (half / full sleeves)</td>
                </tr>
                <tr>
                  <td>Jacket</td>
                  <td>Navy blue (Nursery to V) — compulsory</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h4 className="rules-subtitle">Girls — Class VI and above</h4>
          <div className="table-responsive mb-30">
            <table className="disclosure-table">
              <tbody>
                <tr>
                  <td>Kurta</td>
                  <td>Blue with yellow and red striped collar and arm band</td>
                </tr>
                <tr>
                  <td>Salwar</td>
                  <td>Navy blue</td>
                </tr>
                <tr>
                  <td>Chunni</td>
                  <td>Navy blue</td>
                </tr>
                <tr>
                  <td>Shoes</td>
                  <td>Black leather</td>
                </tr>
                <tr>
                  <td>Socks</td>
                  <td>Navy blue with two yellow stripes</td>
                </tr>
                <tr>
                  <td>Jersey</td>
                  <td>Navy blue with yellow stripes (half / full sleeves)</td>
                </tr>
                <tr>
                  <td>Jacket</td>
                  <td>Navy blue (Nursery to V) — compulsory</td>
                </tr>
                <tr>
                  <td>Blazer</td>
                  <td>Navy blue — compulsory</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="rules-subsection">
          <h4 className="rules-subtitle">Boys — Nursery to XII</h4>
          <div className="table-responsive mb-30">
            <table className="disclosure-table">
              <tbody>
                <tr>
                  <td>Shirt</td>
                  <td>Blue with yellow and red striped collar with arm band</td>
                </tr>
                <tr>
                  <td>Shorts / trouser</td>
                  <td>
                    Navy blue (shorts compulsory for primary section in summer)
                  </td>
                </tr>
                <tr>
                  <td>Shoes</td>
                  <td>Black leather</td>
                </tr>
                <tr>
                  <td>Socks</td>
                  <td>Navy blue with two yellow stripes</td>
                </tr>
                <tr>
                  <td>Jersey</td>
                  <td>Navy blue with yellow stripes (half / full)</td>
                </tr>
                <tr>
                  <td>Jacket</td>
                  <td>Navy blue (Nursery to V) — compulsory</td>
                </tr>
                <tr>
                  <td>Blazer</td>
                  <td>Navy blue (from Class VI onwards) — compulsory</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="rules-subsection">
          <h4 className="rules-subtitle">P.T. uniform — Wednesday &amp; Saturday</h4>
          <h5 className="fw-bold mt-20 mb-15">Summer</h5>
          <div className="table-responsive mb-25">
            <table className="disclosure-table">
              <thead>
                <tr>
                  <th>Group</th>
                  <th>Dress</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Girls up to Class V</td>
                  <td>
                    White kurta &amp; house shirt, white socks and white P.T. shoes
                  </td>
                </tr>
                <tr>
                  <td>Girls Class VI &amp; above</td>
                  <td>
                    White kurta with flaps of house colour, white salwar &amp;
                    white chunni, white socks and white P.T. shoes
                  </td>
                </tr>
                <tr>
                  <td>Boys Nursery to XII</td>
                  <td>
                    White trouser / shorts, house T-shirt, white P.T. shoes, white
                    socks
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <h5 className="fw-bold mb-15">Winter</h5>
          <div className="table-responsive">
            <table className="disclosure-table">
              <thead>
                <tr>
                  <th>Group</th>
                  <th>Dress</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Boys &amp; girls Class VI &amp; above</td>
                  <td>Track suit with house T-shirt</td>
                </tr>
                <tr>
                  <td>Boys &amp; girls below Class VI</td>
                  <td>Same as summer, with school jersey and jackets</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AboutInnerPage>
  );
};

export default UniformMain;

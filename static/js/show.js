document.getElementById('traditionsModal').addEventListener('shown.bs.modal', function () {
    const modal = document.getElementById('traditionsModal');
    const loading = modal.querySelector('.loading-spinner');
    const content = document.getElementById('traditionsContent');

    // Reset UI
    loading.style.display = 'block';
    content.style.display = 'none';
    content.innerHTML = ''; // Clear old content

    // Simulate loading
    setTimeout(() => {
        content.innerHTML = `
            <div class="traditions-scroll-wrapper">
            <div class="traditions-box">
                <div class="traditions-header">
                    <h1>Traditional Marriage Processes</h1>
                    <p>Iteso (Teso) and Agikuyu (Kikuyu)</p>
                </div>
                <div class="traditions-content">
                            <div class="info-box">
                                <h5><strong>Introduction:</strong></h5>
                                <p>In many Kenyan communities, marriage is regarded as both a personal union and a communal institution. Traditional marriage processes are deeply rooted in cultural values, symbolizing respect, responsibility and the joining of two families.They involve multiple stages, each marked by negotiations and symbolic acts that affirm commitment, honour elders and ensure blessings for the couple.</p>
                                <p>The following outlines the Iteso (Teso) and Agikuyu (Kikuyu) traditional marriage processes, capturing their unique practices while highlighting their shared emphasis on family, community and cultural heritage.</p>
                            </div>
                            
                            <h5>Stage-by-Stage Listing</h5>

                            <h2>I. Iteso (Teso) Traditional Marriage Process</h2>
                            
                            <div class="table-container">
                                <table>
                                    <thead>
                                        <tr>
                                            <th style="width: 25%;">Stage</th>
                                            <th>Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong>1. Courtship (Eisupane)</strong></td>
                                            <td>Parents recognize signs that a boy seeks a wife and initiate the traditional process.. Parents with the help of any relative preferably an aunt start to look for a girl. The girl should be from a good family background. If not, the boy can also be allowed to get a girl of his choice but has to share it with the relatives to ascertain the girl's family background.</td>
                                        </tr>
                                        <tr>
                                            <td><strong>2. Examination (Angicio na Ateran)</strong></td>
                                            <td>Formal evaluation of the bride's family background and character. At this stage a girl is requested to come to the boy's home for a day or two. During this stay a boy will not be allowed to come back home. Either he goes to look after cattle or stays completely away from home. The girl is subjected to many trials such as fetching water, pounding nuts, grinding mill, cooking etc. After that she can be then sent with a letter or she goes with somebody who will inform her parents of the success of courtship. Thereafter the parents of the girl arrange for introduction.</td>
                                        </tr>
                                        <tr>
                                            <td><strong>3. Introduction (Aitodiar)</strong></td>
                                            <td>The groom's family visits the bride's and formally asks for her hand in marriage. During this day the groom is escorted by his friends and an aunt. A table is put in the middle of the home where the boy escorted by two or four boys will come and move around the table following any musical rhythm of their choice. After some rounds, they place what the girl requested on the table then they go back to their seats.
                                            <br>The girl will equally be escorted by some girls to come and pick what was placed on the table. When she accepts the offer, ululations set in <strong>(ekareeh)</strong>. Later the groom is escorted by one friend, then the bride also follows suit. They sit near the table as people look at them. Ululations follow. After that the next visit is to the groom's home by the bride's parents.</td>
                                        </tr>
                                        <tr>
                                            <td><strong>4. Boy's family assessment visit (Abilakinio)</strong></td>
                                            <td>The clan of the bride visit the groom's home. The mother of the girl must not go. This is the time when the bride price will be negotiated. After agreeing on the bride price, a day is agreed for taking it to the bride's home.</td>
                                        </tr>
                                        <tr>
                                            <td><strong>5. Bride-price delivery/ traditional wedding (Epeta lo ateker wok)</strong></td>
                                            <td>On this day, the groom, his father together with his brothers/cousins but not his mother, will go with what was agreed. The clan chairperson/spokesperson play a leading here. The bride price is welcomed by ululations.
                                            <br>After some time, the groom and the bride will be brought to sit in the middle of the home where people will present them gifts for starting off a family. After that the bride is bathed near the door of her parents by her auntie where blessings upon blessings will be uttered. Now the bride has fully become a wife. This is also called Egwanit
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><strong>6. The bride's delivery (ainyamakin ateran)</strong></td>
                                            <td>At this stage the wife is officially delivered to her new marital home. When going there she is escorted by some girls called apiriai. Those girls will stay there for a week to a month. They will help their sister with house chores as a way of helping her set up the home. At this stage the wife if not allowed to sleep in her husband's house, not until the other girls have been officially released to go back. That is when the girl will enter her house, organize it and lays the bed. Henceforth she will start sharing a bed with her husband.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            
                            <div class="info-box">
                                <h6><strong><i>Some Additional Notes</i></strong></h6>
                                <h5>THE TRADITIONAL MARRIAGE CEREMONY AMONG THE ITESO (EMANYIT)</h5>
                                <h5>AITODIAR CEREMONY</h5>
                                <p>"We want to unite our clans" The groom's delegation would respond</p>
                                <p>"Which girl are you after" The girl's father would ask</p>
                                <p>"We want <strong><i>Akitwii"</i></strong> The head of the groom's family would say.</p>
                                <p>"Let me call my people" The girl's father would add. He would then send for the rest of this team who would be waiting usually under a shade of a big tree in the compound.</p>
                                <p>The groom's relatives would then be given seats perhaps under another tree. The girl's clan was usually put out of the earshot of the other.
                                    Normally The girl's clan would have organized a master of ceremony for the occasion. This would be an elder who was respected by both clans.
                                    Representatives of both the girls and groom's clan from both paternal and maternal sides (relatives) would be in attendance.
                                    This was so that there would be an opportunity for someone to object the marriage in case unknown blood relationship existed.
                                    When the teams were ready the boy would be asked if he had anything for the girl.
                                    He would then place a special bangle traditionally known as aikomo worn only by married women on a table.
                                    If the girl picked it up and put on it, it was a sign of consent to the marriage and negotiations for bride price <strong><i>(eiis)</i></strong> would take place.
                                    In case the girl did not pick up the <strong><i>aikomo</i></strong>. That would be the end of the matter and the marriage would not take place
                                </p>
                                
                                <h5>BRIDE PRICE NEGOTIATIONS</h5>
                                <p>The girl's family would demand bride price. First, a number of cattle by sending a bundle of long sticks for example 30 long sticks if they wanted 30 heads of cattle. This would be taken by a messenger to the groom's family who were free to deduct the sticks if they wanted to reduce the number of cattle or accept.</p>
                                <p>For example, if they wanted to pay fewer cattle like 15, they would send back 15 long sticks</p>
                                <p>They would repeat the same procedure until they came to an agreement.</p>
                                <p>The girl's family would then send shorter sticks to represent goats. they would repeat the same procedure until they came to an agreement</p>
                                <p>Although no sheep was asked, one sheep would be given to escort the cattle and goats</p>
                                <p>Bride price was considered complete when this sheep usually a ram was given.</p>
                                <p>A special goat traditionally known as (auk kial) was given to the family of the girl.</p>
                                <p>If the marriage broke down it was considered dissolved only if the cattle and goats were given back to the family of the groom. The sheep would not be returned.</p>
                                <p>Once bride price had been agreed upon, foods and drinks especially local beer called ajon would be served for the family of the boy and celebrations would follow until evening.</p>
                                <p>The in-laws were not allowed to sleep over at any time of visit during the marriage process.</p>
                                <p>In most cases, if the two families didn't come to an agreement on bride price, The food was not served</p>
                                <p>A date would then be agreed upon for delivery of the bride price.</p>
                                
                                <h5>DELIVERY OF THE BRIDE PRICE</h5>
                                <p>Bride price was paid in installments. This signified the continuity of the relationship between the two clans. Assuming the agreement was for 15 cattle, 5 goats and the 1 sheep. on the first visit the groom's father would lead a delegation to the brides home accompanied by such number of guests as are considered enough to represent the clan, usually up to twenty males, being brothers and cousins of the groom's father and few grooms' usually brothers/cousins to the groom.</p>
                                <p>On this visit he would take with him the number of cattle and sheep as are available. The source of the cattle would be donations from the father of the groom, acquisition by the groom through personal effort or in most cases the bride price will have been delivered as bride price for a sister of the groom. The Iteso place a lot of emphasis on working hard so as to acquire wealth enough to pay for one's bride price.</p>
                            </div>

                            <h2>II. Agikuyu (Kikuyu) Traditional Marriage Process</h2>
                            
                            <div class="table-container">
                                <table>
                                    <thead>
                                        <tr>
                                            <th style="width: 25%;">Stage</th>
                                            <th>Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong>1. Kumenya Mucii</strong></td>
                                            <td>An informal visit by the groom and a few elders to the bride's home to introduce himself and intentions.<br>
                                            The aim is for both families to familiarise themselves with each other and asses the couple's compatibility
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><strong>2. Kuhanda Ithĩgĩ</strong></td>
                                            <td>Once the two families agree on the union, the groom and his elders return for kuhanda ithĩgĩ. <br>
                                            It signifies that the girl is officially taken and no other suitor may seek her hand in marriage<br>
                                           Both families select representatives for the bride price negotiation
                                           </td>
                                        </tr>
                                        <tr>
                                            <td><strong>3. Ruracio</strong></td>
                                            <td>This is one of the most significant steps in a Kikuyu wedding. Elders from both sides engage in a series of negotiations<br>
                                            Traditionally, the bride price consists of goats and other gifts, and this process lasts a lifetime
                                           </td>
                                        </tr>
                                        <tr>
                                            <td><strong>4. Itara</strong></td>
                                            <td>The bride's family visits the groom's homestead to see the nesting place of their daughter. The aim is to assess where their daughter will be living and whether she will be well cared for.</td>
                                        </tr>
                                        <tr>
                                            <td><strong>5. Ngurario aka gutinia kiande</strong></td>
                                            <td>The traditional Kikuyu wedding of antiquity. The husband cuts one of the front limbs (kiande) of a roasted, fattened ram and gives it to his wife. This part contains only one joint and it signifies the permanence of the union, separable only by death.<br>
                                            In the olden days, this was the main ceremony to bless the marriage institution, but nowadays it is carried out as a secondary ceremony after the Church wedding
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h2>Comparison Overview</h2>
                            <div class="info-box">
                                <p>This section provides a concise, side-by-side overview of the Iteso (Teso) and Agikuyu (Kikuyu) traditional marriage processes, presented in a structured tabular format for clarity.</p>
                            </div>
                            
                            <div class="table-container">
                                <table>
                                    <thead>
                                        <tr>
                                            <th style="width: 20%;">Aspect</th>
                                            <th style="width: 40%;">Iteso (Teso)</th>
                                            <th style="width: 40%;">Agikuyu (Kikuyu)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong>Initial Stage</strong></td>
                                            <td>Introduction <strong>(Ekesuban)</strong>: Boy introduces his intentions to the girl's family, often with elders' guidance.</td>
                                            <td><strong>Kumenya Mucii:</strong> Groom's family formally visits the bride's home</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Engagement</strong></td>
                                            <td>Exchange of gifts (often alcohol, livestock or food) to affirm seriousness.</td>
                                            <td><strong>Kuhanda Ithigi:</strong> Groom delivers ewe <strong>(mwati)</strong> and small he-goat <strong>(harika)</strong>, plants branch to mark engagement.</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Negotiations</strong></td>
                                            <td>Dowry (Bride Price) discussions involve livestock, food and sometimes money. Elders negotiate terms.</td>
                                            <td><strong>Ruracio:</strong> Bride price negotiations with set items, livestock or cash equivalents and household gifts.</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Ceremony</strong></td>
                                            <td>Bride's family hosts; cultural/symbolic acts performed; gifts exchanged; approval sought from elders.</td>
                                            <td>Marriage ceremony follows after <strong>Ruracio</strong>; blessings and cultural acts finalize the union.</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Symbolism</strong></td>
                                            <td>Livestock symbolizes wealth; beer signifies unity and joy</td>
                                            <td>Branch planting symbolizes bride is 'off the market'; livestock shows respect</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div class="conclusion">
                                <h3>Conclusion</h3>
                                <p>Both the Iteso (Teso) and Agikuyu (Kikuyu) traditional marriage processes emphasize respect for family, elders and community. They share similarities in their structured stages, use of livestock or its equivalent as bride price and the strong role of negotiation and symbolic gestures to affirm commitment.</p>
                                <p>However, the differences lie in the cultural expressions: among the Iteso, alcohol (often beer) plays a significant role in affirming unity, while the Agikuyu highlight symbolic acts such as the planting of a branch during Kuhanda Ithigi to signify engagement. The Iteso ceremonies are marked by broader exchanges of gifts and communal approval, while the Agikuyu process follows well-defined stages that build systematically toward Ruracio and the final marriage ceremony.</p>
                                <p>Together, these traditions reflect the richness of Kenya's cultural diversity, where marriage is seen not only as a union between two individuals but also between families and communities.</p>
                        </div>
                        </div>
            </div>
            </div>
        `;
        loading.style.display = 'none';
        content.style.display = 'block';
    }, 600); // artificial delay for loading spinner
});





document.getElementById('traditionsBtn').addEventListener('click', function () {
    const container = document.getElementById('traditionsContainer');
    const loading = container.querySelector('.loading-spinner');
    const content = document.getElementById('traditionsContent');

    // Toggle visibility
    if (container.style.display === 'block') {
        container.style.display = 'none';
        return;
    } else {
        container.style.display = 'block';
    }

    // Reset UI
    loading.style.display = 'block';
    content.style.display = 'none';
    content.innerHTML = ''; // Clear previous content

    // Load HTML content
    setTimeout(() => {
        content.innerHTML = `
            <div class="traditions-scroll-wrapper">
                    <div class="traditions-box">
                        <div class="traditions-header">
                            <h1>Traditional Marriage Processes</h1>
                            <p>Iteso (Teso) and Agikuyu (Kikuyu)</p>
                        </div>
                        
                        <div class="traditions-content">
                            <div class="info-box">
                                <h5><strong>Introduction:</strong></h5>
                                <p>In many Kenyan communities, marriage is regarded as both a personal union and a communal institution. Traditional marriage processes are deeply rooted in cultural values, symbolizing respect, responsibility and the joining of two families.They involve multiple stages, each marked by negotiations and symbolic acts that affirm commitment, honour elders and ensure blessings for the couple.</p>
                                <p>The following outlines the Iteso (Teso) and Agikuyu (Kikuyu) traditional marriage processes, capturing their unique practices while highlighting their shared emphasis on family, community and cultural heritage.</p>
                            </div>
                            
                            <h5>Stage-by-Stage Listing</h5>

                            <h2>I. Iteso (Teso) Traditional Marriage Process</h2>
                            
                            <div class="table-container">
                                <table>
                                    <thead>
                                        <tr>
                                            <th style="width: 25%;">Stage</th>
                                            <th>Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong>1. Courtship (Eisupane)</strong></td>
                                            <td>Parents recognize signs that a boy seeks a wife and initiate the traditional process.. Parents with the help of any relative preferably an aunt start to look for a girl. The girl should be from a good family background. If not, the boy can also be allowed to get a girl of his choice but has to share it with the relatives to ascertain the girl's family background.</td>
                                        </tr>
                                        <tr>
                                            <td><strong>2. Examination (Angicio na Ateran)</strong></td>
                                            <td>Formal evaluation of the bride's family background and character. At this stage a girl is requested to come to the boy's home for a day or two. During this stay a boy will not be allowed to come back home. Either he goes to look after cattle or stays completely away from home. The girl is subjected to many trials such as fetching water, pounding nuts, grinding mill, cooking etc. After that she can be then sent with a letter or she goes with somebody who will inform her parents of the success of courtship. Thereafter the parents of the girl arrange for introduction.</td>
                                        </tr>
                                        <tr>
                                            <td><strong>3. Introduction (Aitodiar)</strong></td>
                                            <td>The groom's family visits the bride's and formally asks for her hand in marriage. During this day the groom is escorted by his friends and an aunt. A table is put in the middle of the home where the boy escorted by two or four boys will come and move around the table following any musical rhythm of their choice. After some rounds, they place what the girl requested on the table then they go back to their seats.
                                            <br>The girl will equally be escorted by some girls to come and pick what was placed on the table. When she accepts the offer, ululations set in <strong>(ekareeh)</strong>. Later the groom is escorted by one friend, then the bride also follows suit. They sit near the table as people look at them. Ululations follow. After that the next visit is to the groom's home by the bride's parents.</td>
                                        </tr>
                                        <tr>
                                            <td><strong>4. Boy's family assessment visit (Abilakinio)</strong></td>
                                            <td>The clan of the bride visit the groom's home. The mother of the girl must not go. This is the time when the bride price will be negotiated. After agreeing on the bride price, a day is agreed for taking it to the bride's home.</td>
                                        </tr>
                                        <tr>
                                            <td><strong>5. Bride-price delivery/ traditional wedding (Epeta lo ateker wok)</strong></td>
                                            <td>On this day, the groom, his father together with his brothers/cousins but not his mother, will go with what was agreed. The clan chairperson/spokesperson play a leading here. The bride price is welcomed by ululations.
                                            <br>After some time, the groom and the bride will be brought to sit in the middle of the home where people will present them gifts for starting off a family. After that the bride is bathed near the door of her parents by her auntie where blessings upon blessings will be uttered. Now the bride has fully become a wife. This is also called Egwanit
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><strong>6. The bride's delivery (ainyamakin ateran)</strong></td>
                                            <td>At this stage the wife is officially delivered to her new marital home. When going there she is escorted by some girls called apiriai. Those girls will stay there for a week to a month. They will help their sister with house chores as a way of helping her set up the home. At this stage the wife if not allowed to sleep in her husband's house, not until the other girls have been officially released to go back. That is when the girl will enter her house, organize it and lays the bed. Henceforth she will start sharing a bed with her husband.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            
                            <div class="info-box">
                                <h6><strong><i>Some Additional Notes</i></strong></h6>
                                <h5>THE TRADITIONAL MARRIAGE CEREMONY AMONG THE ITESO (EMANYIT)</h5>
                                <h5>AITODIAR CEREMONY</h5>
                                <p>"We want to unite our clans" The groom's delegation would respond</p>
                                <p>"Which girl are you after" The girl's father would ask</p>
                                <p>"We want <strong><i>Akitwii"</i></strong> The head of the groom's family would say.</p>
                                <p>"Let me call my people" The girl's father would add. He would then send for the rest of this team who would be waiting usually under a shade of a big tree in the compound.</p>
                                <p>The groom's relatives would then be given seats perhaps under another tree. The girl's clan was usually put out of the earshot of the other.
                                    Normally The girl's clan would have organized a master of ceremony for the occasion. This would be an elder who was respected by both clans.
                                    Representatives of both the girls and groom's clan from both paternal and maternal sides (relatives) would be in attendance.
                                    This was so that there would be an opportunity for someone to object the marriage in case unknown blood relationship existed.
                                    When the teams were ready the boy would be asked if he had anything for the girl.
                                    He would then place a special bangle traditionally known as aikomo worn only by married women on a table.
                                    If the girl picked it up and put on it, it was a sign of consent to the marriage and negotiations for bride price <strong><i>(eiis)</i></strong> would take place.
                                    In case the girl did not pick up the <strong><i>aikomo</i></strong>. That would be the end of the matter and the marriage would not take place
                                </p>
                                
                                <h5>BRIDE PRICE NEGOTIATIONS</h5>
                                <p>The girl's family would demand bride price. First, a number of cattle by sending a bundle of long sticks for example 30 long sticks if they wanted 30 heads of cattle. This would be taken by a messenger to the groom's family who were free to deduct the sticks if they wanted to reduce the number of cattle or accept.</p>
                                <p>For example, if they wanted to pay fewer cattle like 15, they would send back 15 long sticks</p>
                                <p>They would repeat the same procedure until they came to an agreement.</p>
                                <p>The girl's family would then send shorter sticks to represent goats. they would repeat the same procedure until they came to an agreement</p>
                                <p>Although no sheep was asked, one sheep would be given to escort the cattle and goats</p>
                                <p>Bride price was considered complete when this sheep usually a ram was given.</p>
                                <p>A special goat traditionally known as (auk kial) was given to the family of the girl.</p>
                                <p>If the marriage broke down it was considered dissolved only if the cattle and goats were given back to the family of the groom. The sheep would not be returned.</p>
                                <p>Once bride price had been agreed upon, foods and drinks especially local beer called ajon would be served for the family of the boy and celebrations would follow until evening.</p>
                                <p>The in-laws were not allowed to sleep over at any time of visit during the marriage process.</p>
                                <p>In most cases, if the two families didn't come to an agreement on bride price, The food was not served</p>
                                <p>A date would then be agreed upon for delivery of the bride price.</p>
                                
                                <h5>DELIVERY OF THE BRIDE PRICE</h5>
                                <p>Bride price was paid in installments. This signified the continuity of the relationship between the two clans. Assuming the agreement was for 15 cattle, 5 goats and the 1 sheep. on the first visit the groom's father would lead a delegation to the brides home accompanied by such number of guests as are considered enough to represent the clan, usually up to twenty males, being brothers and cousins of the groom's father and few grooms' usually brothers/cousins to the groom.</p>
                                <p>On this visit he would take with him the number of cattle and sheep as are available. The source of the cattle would be donations from the father of the groom, acquisition by the groom through personal effort or in most cases the bride price will have been delivered as bride price for a sister of the groom. The Iteso place a lot of emphasis on working hard so as to acquire wealth enough to pay for one's bride price.</p>
                            </div>

                            <h2>II. Agikuyu (Kikuyu) Traditional Marriage Process</h2>
                            
                            <div class="table-container">
                                <table>
                                    <thead>
                                        <tr>
                                            <th style="width: 25%;">Stage</th>
                                            <th>Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong>1. Kumenya Mucii</strong></td>
                                            <td>An informal visit by the groom and a few elders to the bride's home to introduce himself and intentions.<br>
                                            The aim is for both families to familiarise themselves with each other and asses the couple's compatibility
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><strong>2. Kuhanda Ithĩgĩ</strong></td>
                                            <td>Once the two families agree on the union, the groom and his elders return for kuhanda ithĩgĩ. <br>
                                            It signifies that the girl is officially taken and no other suitor may seek her hand in marriage<br>
                                           Both families select representatives for the bride price negotiation
                                           </td>
                                        </tr>
                                        <tr>
                                            <td><strong>3. Ruracio</strong></td>
                                            <td>This is one of the most significant steps in a Kikuyu wedding. Elders from both sides engage in a series of negotiations<br>
                                            Traditionally, the bride price consists of goats and other gifts, and this process lasts a lifetime
                                           </td>
                                        </tr>
                                        <tr>
                                            <td><strong>4. Itara</strong></td>
                                            <td>The bride's family visits the groom's homestead to see the nesting place of their daughter. The aim is to assess where their daughter will be living and whether she will be well cared for.</td>
                                        </tr>
                                        <tr>
                                            <td><strong>5. Ngurario aka gutinia kiande</strong></td>
                                            <td>The traditional Kikuyu wedding of antiquity. The husband cuts one of the front limbs (kiande) of a roasted, fattened ram and gives it to his wife. This part contains only one joint and it signifies the permanence of the union, separable only by death.<br>
                                            In the olden days, this was the main ceremony to bless the marriage institution, but nowadays it is carried out as a secondary ceremony after the Church wedding
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h2>Comparison Overview</h2>
                            <div class="info-box">
                                <p>This section provides a concise, side-by-side overview of the Iteso (Teso) and Agikuyu (Kikuyu) traditional marriage processes, presented in a structured tabular format for clarity.</p>
                            </div>
                            
                            <div class="table-container">
                                <table>
                                    <thead>
                                        <tr>
                                            <th style="width: 20%;">Aspect</th>
                                            <th style="width: 40%;">Iteso (Teso)</th>
                                            <th style="width: 40%;">Agikuyu (Kikuyu)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong>Initial Stage</strong></td>
                                            <td>Introduction <strong>(Ekesuban)</strong>: Boy introduces his intentions to the girl's family, often with elders' guidance.</td>
                                            <td><strong>Kumenya Mucii:</strong> Groom's family formally visits the bride's home</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Engagement</strong></td>
                                            <td>Exchange of gifts (often alcohol, livestock or food) to affirm seriousness.</td>
                                            <td><strong>Kuhanda Ithigi:</strong> Groom delivers ewe <strong>(mwati)</strong> and small he-goat <strong>(harika)</strong>, plants branch to mark engagement.</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Negotiations</strong></td>
                                            <td>Dowry (Bride Price) discussions involve livestock, food and sometimes money. Elders negotiate terms.</td>
                                            <td><strong>Ruracio:</strong> Bride price negotiations with set items, livestock or cash equivalents and household gifts.</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Ceremony</strong></td>
                                            <td>Bride's family hosts; cultural/symbolic acts performed; gifts exchanged; approval sought from elders.</td>
                                            <td>Marriage ceremony follows after <strong>Ruracio</strong>; blessings and cultural acts finalize the union.</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Symbolism</strong></td>
                                            <td>Livestock symbolizes wealth; beer signifies unity and joy</td>
                                            <td>Branch planting symbolizes bride is 'off the market'; livestock shows respect</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div class="conclusion">
                                <h3>Conclusion</h3>
                                <p>Both the Iteso (Teso) and Agikuyu (Kikuyu) traditional marriage processes emphasize respect for family, elders and community. They share similarities in their structured stages, use of livestock or its equivalent as bride price and the strong role of negotiation and symbolic gestures to affirm commitment.</p>
                                <p>However, the differences lie in the cultural expressions: among the Iteso, alcohol (often beer) plays a significant role in affirming unity, while the Agikuyu highlight symbolic acts such as the planting of a branch during Kuhanda Ithigi to signify engagement. The Iteso ceremonies are marked by broader exchanges of gifts and communal approval, while the Agikuyu process follows well-defined stages that build systematically toward Ruracio and the final marriage ceremony.</p>
                                <p>Together, these traditions reflect the richness of Kenya's cultural diversity, where marriage is seen not only as a union between two individuals but also between families and communities.</p>
                            </div>
                        </div>
                    </div>
            </div>
        `;

        loading.style.display = 'none';
        content.style.display = 'block';
    }, 500); // Small delay to show loading spinner
});

// Close button
document.getElementById('closeTraditions').addEventListener('click', function () {
    document.getElementById('traditionsContainer').style.display = 'none';
});
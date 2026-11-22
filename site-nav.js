/* Bio-Wiki 全站專題目錄（方案 A 學科折疊 ＋ 方案 C 搜尋與快捷篩選膠囊）
 * 單一真相來源：未來新增專題只需在下方 BIO_WIKI_CATEGORIES 新增一筆資料，全站所有頁面自動同步。
 */
(function () {
  var BIO_WIKI_CATEGORIES = [
    {
      id: 'operon',
      icon: '🔥',
      name: '操縱組與原核基因調控',
      shortName: '操縱組',
      items: [
        {
          href: 'prokaryotic-eukaryotic-gene-regulation.html',
          title: '原核與真核的基因表現調控',
          tag: '基因表現',
          keywords: '原核 真核 基因表現調控 細菌 大腸桿菌 轉錄 轉譯 RNA 加工 mRNA 壽命 穩定性 轉譯起始效率 選擇式剪接 Campbell Freeman Alberts'
        },
        {
          href: 'prokaryote-gene-regulation-types.html',
          title: '原核基因調控怎麼分類？（正負 × 持續／誘導／抑制）',
          tag: '總分類',
          keywords: '原核基因調控 正調控 負調控 持續型 管家基因 可誘導型 可抑制型 positive negative constitutive inducible repressible 2x2 四象限 lac trp ara mal Brooker Pierce Goldberg Klug Solomon Sadava Campbell Raven Freeman'
        },
        {
          href: 'operator-transcription-translation.html',
          title: '操作子會不會被轉錄與轉譯？（基因 vs. 子）',
          tag: '構造本質',
          keywords: '操作子 operator 操縱組 operon 啟動子 調節基因 結構基因 抑制蛋白 轉錄 轉譯 5-UTR O1 O2 O3 基因 vs 子 Cox Goldberg Becker Weaver Klug Pierce Campbell Alberts Sadava Brock'
        },
        {
          href: 'lac-operon-sugar-sensing.html',
          title: '大腸桿菌如何感測葡萄糖與乳糖？（含普生 8 套比較）',
          tag: '雙糖感測',
          keywords: '大腸桿菌 乳糖操縱組 lac operon 葡萄糖 乳糖 感測 基礎滲漏轉錄 leaky basal 通透酶 LacY 異乳糖 allolactose PTS EIIA cAMP CAP CRP 誘導物排除 AND邏輯閘 普通生物學 8套 比較 Brooker Solomon Freeman Raven Campbell Sadava Starr Prescott Cox Pierce Weaver Lehninger'
        },
        {
          href: 'operon-inference-pierce.html',
          title: '乳糖操縱組推論科學史（PaJaMo、部分二倍體到定序）',
          tag: '科學史',
          keywords: 'Pierce 操縱組 推論 PaJaMo 部分二倍體 partial diploid 局部合子 順式 cis 反式 trans lacI lacIs lacO lacOc lacP Jacob Monod Gilbert 平衡透析 足跡 定序 科學史'
        },
        {
          href: 'lactose-intolerance-lac-operon.html',
          title: '乳糖不耐症與大腸桿菌 lac 操縱組怎麼接軌？',
          tag: '腸道生態',
          keywords: '乳糖不耐症 lactose intolerance 大腸桿菌 lac操縱組 cAMP CAP 黏蛋白 寡醣 短鏈脂肪酸 膳食纖維 Vander Lehninger Prescott Guyton'
        },
        {
          href: 'why-eukaryotes-lack-operons.html',
          title: '為什麼原核有操縱組，真核卻幾乎沒有？',
          tag: '原真演化',
          keywords: '真核細胞 操縱組 演化 古菌 單順反子 多順反子 5端帽 強化子 調控元件 組合調控 細胞記憶 基因水平轉移 遺傳漂變 核膜 內含子 線蟲 C. elegans 反式剪接 trans-splicing Weaver Alberts Lodish Campbell Prescott Evolution Stryer Freeman'
        }
      ]
    },
    {
      id: 'molbio',
      icon: '🧬',
      name: '染色體、DNA 與真核轉錄調控',
      shortName: 'DNA 與轉錄',
      items: [
        {
          href: 'chromatin.html',
          title: '染色質與染色體的本質差別是什麼？',
          tag: '分生正典',
          keywords: '染色質 染色體 chromatin chromosome 間期 分裂期 組蛋白 核小體 Lodish Alberts Cox Becker Weaver Pierce Brooker'
        },
        {
          href: 'griffith-transformation.html',
          title: 'Griffith 轉形作用：外來 DNA 如何進入並重組？',
          tag: '經典實驗',
          keywords: 'Griffith 轉形作用 transformation 肺炎鏈球菌 R型菌 S型菌 莢膜 EndA ComEC RecA 同源重組 Pierce Prescott Klug Cox Weaver'
        },
        {
          href: 'promoter-tata-box.html',
          title: '啟動子、TATA 匣與 DNA 甲基化怎麼調控轉錄？',
          tag: '轉錄調控',
          keywords: '啟動子 promoter TATA box TATA匣 DNA甲基化 methylation 轉錄因子 RNA聚合酶 高中7版 Alberts Lodish Weaver Campbell'
        }
      ]
    },
    {
      id: 'genetics',
      icon: '🌱',
      name: '遺傳學與顯隱性判準',
      shortName: '遺傳學',
      items: [
        {
          href: 'gene-allele-dna-chromosome.html',
          title: '遺傳因子、基因、等位基因與染色體怎麼分？',
          tag: '核心名詞',
          keywords: '遺傳因子 基因 等位基因 DNA 染色體 allele gene chromosome 孟德爾 分子生物學 大同代理 教甄口試'
        },
        {
          href: 'genetics-terminology-hierarchy.html',
          title: 'DNA、基因、等位基因、染色質、染色體與基因體怎麼串連？',
          tag: '名詞階層',
          keywords: 'DNA 基因 等位基因 染色質 染色體 基因體 性狀 表徵 character trait chromatin chromosome genome allele 成功高中 羅東高中 教甄 Campbell Alberts Becker Brooker'
        },
        {
          href: 'homologs-diploid-aabb-crossover.html',
          title: '同源染色體 vs. 雙套（2n），與 AaBb × AaBb 自交如何判斷互換？',
          tag: '連鎖與互換',
          keywords: '同源染色體 雙套 二倍體 2n 倍性 ploidy 姊妹染色分體 AaBb 互換 crossing over 連鎖 linkage 順式 反式 9:3:3:1 3:1 1:2:1 試交 甜豌豆 羅東高中 教甄 Campbell Pierce Solomon Goldberg Klug'
        },
        {
          href: 'mitotic-crossing-over.html',
          title: '有絲分裂互換與重組：中節位置、雙生斑與子細胞表現型機率推導',
          tag: '體細胞互換',
          keywords: '有絲分裂互換 有絲分裂重組 mitotic crossing-over mitotic recombination 體細胞互換 中節 centromere 雙生斑 雙斑 twin spot Curt Stern 異型合子性喪失 異型接合性喪失 LOH 視網膜母細胞瘤 RB RB1 Rad51 SDSA DSBR 113全國聯招 綜合題 教甄 Goldberg Brooker Weinberg Lodish Cox'
        },
        {
          href: 'xy-synapsis-crossing-over.html',
          title: '人類 XY 染色體會聯會、互換並算一個四分體嗎？',
          tag: '性染色體',
          keywords: 'XY染色體 性染色體 聯會 互換 易位 偽體染色體區 PAR MSY SRY XX男性 XY女性 四分體 二分體 Goldberg Klug Pierce Brooker Campbell'
        },
        {
          href: 'chromosome-breakage-cri-du-chat.html',
          title: '染色體為何自然斷裂？貓叫症與專一酵素有關嗎？',
          tag: '染色體變異',
          keywords: '染色體斷裂 DNA雙股斷裂 DSB 貓叫症 貓哭症 5p缺失 活性含氧物 ROS 輻射 Spo11 RAG 伯基特 脆弱X 紅綠色盲 Brooker Alberts Goldberg'
        },
        {
          href: 'sickle-cell-dominance.html',
          title: '鐮刀型貧血是完全顯性、不完全顯性還是等顯性？',
          tag: '顯隱性層次',
          keywords: '鐮刀型貧血 sickle cell 不完全顯性 中間型遺傳 等顯性 共顯性 codominance 血紅素 HbA HbS Campbell Goldberg Griffiths'
        },
        {
          href: 'wheat-polygenic.html',
          title: '小麥穀粒顏色的多基因累加模型怎麼推導？',
          tag: '數量性狀',
          keywords: '小麥 穀粒顏色 多基因遺傳 polygenic inheritance 累加模型 數量性狀 二項式分佈 Nilsson-Ehle Campbell Pierce'
        },
        {
          href: 'environment-phenotype-vs-gene-regulation.html',
          title: '環境影響表現型＝基因調控嗎？（繡球花、喜馬拉雅兔與雪靴兔）',
          tag: '表現型可塑性',
          keywords: '環境影響表現型 表現型可塑性 phenotypic plasticity 反應規範 norm of reaction 基因調控 繡球花 Hydrangea 土壤 pH 游離鋁 花青素 喜馬拉雅兔 Himalayan 暹羅貓 Siamese 酪胺酸酶 tyrosinase 溫度敏感性等位基因 冰袋實驗 雪靴兔 雪鞋兔 snowshoe hare 荷爾蒙 表觀遺傳 高中必修 115新北高中聯招 Campbell Solomon Sadava Raven Starr Pierce Brooker Hickman Evolution'
        }
      ]
    },
    {
      id: 'physiology',
      icon: '🫀',
      name: '動物構造與生理調控',
      shortName: '動物生理',
      items: [
        {
          href: 'abo-transfusion-self-tolerance.html',
          title: 'ABO 血型輸血、自體耐受與為何本來就有 A 抗原？',
          tag: '輸血與免疫',
          keywords: 'ABO 血型 複等位基因 共顯性 等顯性 輸血 全血 濃縮紅血球 成分輸血 血漿 稀釋效應 自體耐受性 中樞耐受 周邊耐受 受體編輯 選殖刪除 無反應狀態 天然抗體 IgM 腸道菌 交叉反應 Rh血型 抗D抗體 醣萼 glycocalyx 帶3蛋白質 血型糖蛋白 分子擬態 軍備競賽 霍亂 瘧疾 平衡多型性 Guyton Hole Fox Vander Tortora Basic Immunology Campbell Stryer Alberts Junqueira Becker'
        },
        {
          href: 'lac-operon-vs-insulin-exocytosis.html',
          title: '沒吃飯不製造胰島素？lac 操縱組 vs. 調控型胞吐',
          tag: '跨單元',
          series: 'cross',
          keywords: '胰島素 insulin 乳糖操縱組 lac operon 調控型胞吐 持續型胞吐 分泌囊泡 雙相分泌 3-5分鐘 15分鐘 血糖 GLUT2 ATP K+通道 Ca2+ 類固醇激素 皮質醇 Alberts Guyton Vander Campbell Sadava'
        },
        {
          href: 'oogenesis-interphase-dyad.html',
          title: '卵原細胞何時複製並形成二分體？（初級卵母細胞與間期）',
          tag: '生殖生理',
          keywords: '卵原細胞 初級卵母細胞 卵子生成 間期 S期 DNA複製 二分體 四分體 單分體 聯會 前期I 雙線期 減數分裂 Vander Gilbert Campbell Alberts'
        },
        {
          href: 'spermatogonia-hole.html',
          title: '精原細胞分化與生精歷程全貌（血睪屏障與激素回饋）',
          tag: '生殖生理',
          keywords: '精原細胞 生精作用 精子生成 A型 B型 細精管 支持細胞 萊氏細胞 血睪屏障 ABP 抑制素 細胞質橋 Stra8 Campbell Hole Junqueira Gilbert Vander'
        }
      ]
    },
    {
      id: 'plant',
      icon: '🌻',
      name: '植物構造與生理調控',
      shortName: '植物生理',
      items: [
        {
          href: 'plant-photoreceptor-photoperiodism.html',
          title: '沒有感官怎麼感知世界？（細菌乳糖 vs. 植物光週期）',
          tag: '跨單元',
          series: 'cross',
          keywords: '光敏素 phytochrome Pr Pfr 呈色基團 異構化 隱色素 促向光蛋白 光週期 臨界夜長 暗期中斷 近日時鐘 CO FT 開花素 種子萌發 遮蔭迴避 大腸桿菌 乳糖 Taiz Campbell Hopkins Sadava'
        }
      ]
    },
    {
      id: 'evolution',
      icon: '🦠',
      name: '細胞演化與生物多樣性',
      shortName: '細胞演化',
      items: [
        {
          href: 'endosymbiosis.html',
          title: '內共生假說的宿主是原核還是真核？從古菌融合到褐藻',
          tag: '細胞演化',
          keywords: '內共生 endosymbiosis 粒線體 葉綠體 色素體 Asgard 古菌 初級內共生 次級內共生 褐藻 紅藻 核形體 Campbell Raven Becker Alberts Freeman'
        }
      ]
    }
  ];

  window.BIO_WIKI_CATEGORIES = BIO_WIKI_CATEGORIES;

  function getCurrentFile() {
    var path = window.location.pathname || '';
    var file = path.substring(path.lastIndexOf('/') + 1);
    return file || 'index.html';
  }

  function injectStyles() {
    if (document.getElementById('ro-site-nav-style')) return;
    var css = [
      '#roSiteDrawer .ro-drawer-panel { padding: 0; display: flex; flex-direction: column; max-height: 84vh; overflow: hidden; }',
      '.ro-nav-sticky { padding: 16px 16px 12px; border-bottom: 1px solid var(--border-color); background: var(--bg-pillbar); flex-shrink: 0; }',
      '.ro-nav-sticky .ro-drawer-head { margin-bottom: 10px; padding-bottom: 8px; }',
      '.ro-nav-count-badge { font-size: 12px; font-weight: 700; padding: 2px 8px; border-radius: 999px; background: var(--primary-light); color: var(--primary); border: 1px solid var(--primary-border); margin-left: 6px; vertical-align: middle; }',
      '.ro-nav-search-wrap { position: relative; margin-bottom: 10px; }',
      '.ro-nav-search-icon { position: absolute; left: 12px; top: 50%; transform: translateY(-50%); font-size: 14px; color: var(--text-muted); pointer-events: none; }',
      '.ro-nav-search { width: 100%; background: var(--bg-primary); color: var(--text-primary); border: 1px solid var(--border-strong); border-radius: 12px; padding: 9px 34px 9px 34px; font-size: 15px; font-family: inherit; outline: none; }',
      '.ro-nav-search:focus { border-color: var(--primary); }',
      '.ro-nav-clear { position: absolute; right: 8px; top: 50%; transform: translateY(-50%); background: transparent; border: none; color: var(--text-muted); font-size: 15px; cursor: pointer; padding: 4px 6px; display: none; }',
      '.ro-nav-clear.visible { display: inline-block; }',
      '.ro-nav-pills { display: flex; flex-wrap: nowrap; overflow-x: auto; gap: 6px; padding-bottom: 2px; scrollbar-width: none; -webkit-overflow-scrolling: touch; }',
      '.ro-nav-pills::-webkit-scrollbar { display: none; }',
      '.ro-nav-pill { appearance: none; flex-shrink: 0; background: var(--bg-card); color: var(--text-secondary); border: 1px solid var(--border-color); border-radius: 999px; padding: 5px 11px; font-size: 13px; font-weight: 600; cursor: pointer; font-family: inherit; transition: all 0.15s ease; white-space: nowrap; }',
      '.ro-nav-pill.active { background: var(--primary); color: #181614; border-color: var(--primary); font-weight: 800; }',
      'html[data-theme="light"] .ro-nav-pill.active { color: #ffffff; }',
      '.ro-nav-body { padding: 12px 16px 24px; overflow-y: auto; flex: 1; min-height: 0; -webkit-overflow-scrolling: touch; overscroll-behavior: contain; display: flex; flex-direction: column; gap: 10px; }',
      '.ro-nav-home-row { display: flex; align-items: center; justify-content: space-between; gap: 8px; flex-shrink: 0; }',
      '.ro-nav-home { flex: 1; display: block; text-decoration: none !important; color: var(--text-body) !important; padding: 10px 14px; border-radius: 12px; background: var(--bg-card); border: 1px solid var(--border-color); font-size: 15px; font-weight: 700; }',
      '.ro-nav-home.active { color: #181614 !important; background: var(--accent); border-color: var(--accent); font-weight: 800; }',
      'html[data-theme="light"] .ro-nav-home.active { background: #f6c84c; border-color: #e0b034; color: #2f2820 !important; }',
      '.ro-nav-expand-btn { appearance: none; background: var(--bg-card); color: var(--text-muted); border: 1px solid var(--border-color); border-radius: 12px; padding: 10px 11px; font-size: 12.5px; font-weight: 700; cursor: pointer; white-space: nowrap; font-family: inherit; }',
      '.ro-nav-expand-btn:hover { color: var(--text-primary); border-color: var(--border-strong); }',
      '.ro-nav-group { background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 14px; overflow: hidden; flex-shrink: 0; }',
      '.ro-nav-group-head { width: 100%; appearance: none; background: transparent; border: none; padding: 11px 14px; display: flex; align-items: center; justify-content: space-between; gap: 8px; cursor: pointer; font-family: inherit; text-align: left; }',
      '.ro-nav-group-left { display: flex; align-items: center; gap: 8px; min-width: 0; }',
      '.ro-nav-group-title { font-size: 15px; font-weight: 800; color: var(--text-primary); }',
      '.ro-nav-group-count { font-size: 12px; font-weight: 700; color: var(--text-muted); background: var(--bg-tag); padding: 1px 7px; border-radius: 999px; }',
      '.ro-nav-chevron { font-size: 13px; color: var(--text-muted); transition: transform 0.18s ease; flex-shrink: 0; }',
      '.ro-nav-group.open .ro-nav-chevron { transform: rotate(90deg); color: var(--accent); }',
      '.ro-nav-group-items { display: none; padding: 0 10px 10px; flex-direction: column; gap: 6px; border-top: 1px dashed var(--border-color); padding-top: 8px; }',
      '.ro-nav-group.open .ro-nav-group-items { display: flex; }',
      '.ro-nav-item { display: flex; align-items: flex-start; justify-content: space-between; gap: 10px; flex-shrink: 0; text-decoration: none !important; color: var(--text-body) !important; padding: 10px 12px; border-radius: 10px; background: var(--bg-primary); border: 1px solid var(--border-color); font-size: 15px; font-weight: 600; line-height: 1.48; transition: border-color 0.15s ease; }',
      '.ro-nav-item:hover { border-color: var(--primary-border); }',
      '.ro-nav-item.active { color: #181614 !important; background: var(--accent); border-color: var(--accent); font-weight: 800; }',
      'html[data-theme="light"] .ro-nav-item.active { background: #f6c84c; border-color: #e0b034; color: #2f2820 !important; }',
      '.ro-nav-item-text { flex: 1; min-width: 0; }',
      '.ro-nav-item-tag { flex-shrink: 0; font-size: 11px; font-weight: 700; padding: 2px 7px; border-radius: 999px; background: var(--bg-tag); color: var(--text-muted); border: 1px solid var(--border-color); margin-top: 2px; }',
      '.ro-nav-item.active .ro-nav-item-tag { background: rgba(24, 22, 20, 0.14); color: #181614; border-color: transparent; }',
      '.ro-nav-flat-list { display: flex; flex-direction: column; gap: 7px; flex-shrink: 0; }',
      '.ro-nav-flat-item { background: var(--bg-card); }',
      '.ro-nav-empty { text-align: center; padding: 26px 12px; color: var(--text-muted); font-size: 14.5px; }'
    ].join('\n');
    var style = document.createElement('style');
    style.id = 'ro-site-nav-style';
    style.textContent = css;
    document.head.appendChild(style);
  }

  function buildDrawer() {
    var backdrop = document.getElementById('roSiteDrawer');
    if (!backdrop) return;
    injectStyles();

    var currentFile = getCurrentFile();
    var allItems = [];
    BIO_WIKI_CATEGORIES.forEach(function (cat) {
      cat.items.forEach(function (item) {
        allItems.push({
          href: item.href,
          title: item.title,
          tag: item.tag,
          series: item.series || '',
          keywords: (item.keywords || '').toLowerCase(),
          catId: cat.id,
          catIcon: cat.icon,
          catName: cat.shortName
        });
      });
    });

    var totalCount = allItems.length;
    var activeFilter = 'all';
    var searchQuery = '';
    var expandedGroups = {};

    // 預設展開目前所在頁面的分類；首頁預設展開第一個分類（操縱組）
    var currentCatId = null;
    allItems.forEach(function (it) {
      if (it.href === currentFile) currentCatId = it.catId;
    });
    if (currentCatId) {
      expandedGroups[currentCatId] = true;
    } else {
      expandedGroups['operon'] = true;
    }

    var panel = backdrop.querySelector('.ro-drawer-panel');
    if (!panel) return;

    var pillsHtml = [
      '<button class="ro-nav-pill active" type="button" data-filter="all">全部 (' + totalCount + ')</button>'
    ];
    BIO_WIKI_CATEGORIES.forEach(function (cat) {
      pillsHtml.push(
        '<button class="ro-nav-pill" type="button" data-filter="cat:' + cat.id + '">' +
        cat.icon + ' ' + cat.shortName + ' (' + cat.items.length + ')</button>'
      );
    });

    panel.innerHTML =
      '<div class="ro-nav-sticky">' +
        '<div class="ro-drawer-head">' +
          '<div class="ro-drawer-title">📚 Bio-Wiki 全站專題<span class="ro-nav-count-badge">' + totalCount + ' 篇</span></div>' +
          '<button class="ro-drawer-close" type="button" aria-label="關閉選單" onclick="roCloseDrawer(\'roSiteDrawer\')">✕</button>' +
        '</div>' +
        '<div class="ro-nav-search-wrap">' +
          '<span class="ro-nav-search-icon">🔍</span>' +
          '<input class="ro-nav-search" id="roNavSearch" type="search" placeholder="搜尋問題、關鍵字或課本（例：操縱組、XY、胰島素…）" autocomplete="off">' +
          '<button class="ro-nav-clear" id="roNavClear" type="button" aria-label="清除搜尋">✕</button>' +
        '</div>' +
        '<div class="ro-nav-pills" id="roNavPills">' + pillsHtml.join('') + '</div>' +
      '</div>' +
      '<div class="ro-nav-body" id="roNavBody"></div>';

    var searchInput = document.getElementById('roNavSearch');
    var clearBtn = document.getElementById('roNavClear');
    var pillsWrap = document.getElementById('roNavPills');
    var bodyWrap = document.getElementById('roNavBody');

    function allGroupsOpen() {
      return BIO_WIKI_CATEGORIES.every(function (c) { return !!expandedGroups[c.id]; });
    }

    function escapeHtml(str) {
      return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    }

    function render() {
      var q = searchQuery.trim().toLowerCase();
      var isAccordionMode = (activeFilter === 'all' && !q);

      var homeActive = (currentFile === 'index.html' || currentFile === '') ? ' active' : '';
      var html = '<div class="ro-nav-home-row">' +
        '<a class="ro-nav-home' + homeActive + '" href="index.html">🏠 首頁：主題分類總覽</a>' +
        (isAccordionMode
          ? '<button class="ro-nav-expand-btn" id="roNavExpandAll" type="button">' + (allGroupsOpen() ? '全部收合' : '展開全部') + '</button>'
          : '') +
      '</div>';

      if (isAccordionMode) {
        BIO_WIKI_CATEGORIES.forEach(function (cat) {
          var isOpen = !!expandedGroups[cat.id];
          html += '<div class="ro-nav-group' + (isOpen ? ' open' : '') + '" data-cat-group="' + cat.id + '">' +
            '<button class="ro-nav-group-head" type="button" data-toggle-cat="' + cat.id + '" aria-expanded="' + (isOpen ? 'true' : 'false') + '">' +
              '<span class="ro-nav-group-left">' +
                '<span>' + cat.icon + '</span>' +
                '<span class="ro-nav-group-title">' + escapeHtml(cat.name) + '</span>' +
                '<span class="ro-nav-group-count">' + cat.items.length + ' 篇</span>' +
              '</span>' +
              '<span class="ro-nav-chevron">▸</span>' +
            '</button>' +
            '<div class="ro-nav-group-items">';

          cat.items.forEach(function (item) {
            var act = item.href === currentFile ? ' active' : '';
            html += '<a class="ro-nav-item' + act + '" href="' + item.href + '">' +
              '<span class="ro-nav-item-text">' + escapeHtml(item.title) + '</span>' +
              (item.tag ? '<span class="ro-nav-item-tag">' + escapeHtml(item.tag) + '</span>' : '') +
            '</a>';
          });

          html += '</div></div>';
        });
      } else {
        var matched = allItems.filter(function (it) {
          var filterOk = true;
          if (activeFilter.indexOf('cat:') === 0) {
            filterOk = (it.catId === activeFilter.slice(4));
          } else if (activeFilter.indexOf('series:') === 0) {
            filterOk = (it.series === activeFilter.slice(7));
          }
          if (!filterOk) return false;
          if (!q) return true;
          var hay = (it.title + ' ' + it.tag + ' ' + it.catName + ' ' + it.keywords).toLowerCase();
          return hay.indexOf(q) !== -1;
        });

        if (!matched.length) {
          html += '<div class="ro-nav-empty">找不到符合「' + escapeHtml(searchQuery.trim()) + '」的專題，試試換個關鍵字或點選上方「全部」。</div>';
        } else {
          html += '<div class="ro-nav-flat-list">';
          matched.forEach(function (it) {
            var act = it.href === currentFile ? ' active' : '';
            var badgeLabel = (activeFilter === 'all' || q) ? (it.catIcon + ' ' + (it.tag || it.catName)) : (it.tag || it.catName);
            html += '<a class="ro-nav-item ro-nav-flat-item' + act + '" href="' + it.href + '">' +
              '<span class="ro-nav-item-text">' + escapeHtml(it.title) + '</span>' +
              '<span class="ro-nav-item-tag">' + escapeHtml(badgeLabel) + '</span>' +
            '</a>';
          });
          html += '</div>';
        }
      }

      bodyWrap.innerHTML = html;

      var expandBtn = document.getElementById('roNavExpandAll');
      if (expandBtn) {
        expandBtn.addEventListener('click', function () {
          var shouldOpen = !allGroupsOpen();
          BIO_WIKI_CATEGORIES.forEach(function (c) { expandedGroups[c.id] = shouldOpen; });
          render();
        });
      }

      bodyWrap.querySelectorAll('[data-toggle-cat]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var cid = btn.getAttribute('data-toggle-cat');
          expandedGroups[cid] = !expandedGroups[cid];
          render();
        });
      });
    }

    pillsWrap.addEventListener('click', function (e) {
      var pill = e.target.closest('.ro-nav-pill');
      if (!pill) return;
      activeFilter = pill.getAttribute('data-filter') || 'all';
      pillsWrap.querySelectorAll('.ro-nav-pill').forEach(function (p) {
        p.classList.toggle('active', p === pill);
      });
      render();
    });

    searchInput.addEventListener('input', function () {
      searchQuery = searchInput.value || '';
      clearBtn.classList.toggle('visible', searchQuery.length > 0);
      render();
    });

    clearBtn.addEventListener('click', function () {
      searchInput.value = '';
      searchQuery = '';
      clearBtn.classList.remove('visible');
      render();
      searchInput.focus();
    });

    // ESC 關閉抽屜
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && backdrop.classList.contains('open')) {
        backdrop.classList.remove('open');
      }
    });

    // 開啟抽屜時自動捲動至目前所在專題
    var origOpen = window.roOpenDrawer;
    window.roOpenDrawer = function (id) {
      if (typeof origOpen === 'function') origOpen(id);
      if (id === 'roSiteDrawer') {
        setTimeout(function () {
          var activeEl = bodyWrap.querySelector('.ro-nav-item.active');
          if (activeEl && activeEl.scrollIntoView) {
            activeEl.scrollIntoView({ block: 'nearest' });
          }
        }, 40);
      }
    };

    render();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildDrawer);
  } else {
    buildDrawer();
  }
})();

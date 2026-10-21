import { useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { BookOpen, ChevronRight, CreditCard, Download, Facebook, FileText, Instagram, Mail, Menu, MessageCircle, Phone, Printer, QrCode, Search, ShoppingCart, X } from "lucide-react";

const categories = ["Apostilas","Avaliação de Sondagem diagnóstica","Blog","Datas Comemorativas","Dia do livro","Educação Especial","Educação Infantil","Ensino Fundamental","Jogos","Kit sala de aula crianças","Kit sala de aula doce aventura","Leitura","Matemática","Materiais","Materiais 07 de setembro","Materiais alimentação saudável","Materiais Aula da Saudade","Materiais consciência negra","Materiais Copa do Mundo","Materiais cristãos","Materiais de alfabetização","Materiais de Bullying","Materiais de Carnaval","Materiais de férias","Materiais de folclore","Materiais de formatura","Materiais de halloween","Materiais de higiene bucal","Materiais de Inverno","Materiais de Natal","Materiais de Páscoa","Materiais de primavera","Materiais Descobrimento do Brasil","Materiais dia da água","dia da árvore","dia da bandeira","dia da coordenação pedagógica","dia da escola","dia da merendeira","dia da proclamação da república","dia das crianças","dia das mães","dia do cabelo maluco","dia do circo","dia do diretor","dia do estudante","dia do índio","dia do servidor público","dia do soldado","dia do trabalho","dia do trânsito","dia dos avós","dia dos pais","dia dos professores","Materiais dos animais","Festa Junina","Maio Laranja","Meio ambiente","novembro azul","Outubro rosa","setembro amarelo","volta às aulas","Modelos de relatórios","Painel","Planner","Reunião de pais","Saúde"];

const products = [
 ["painel-consciencia-negra-diversidade","Painel consciência negra: celebrar a diversidade",12,"diversidade"],
 ["cartao-dia-da-merendeira-2","Cartão dia da merendeira 2",8,"merendeira"],
 ["cartaozinho-dia-da-merendeira-1","Cartãozinho dia da merendeira 1",8,"merendeira2"],
 ["lembrancinha-sache-cappuccino-novembro-azul","Lembrancinha para sachê de cappuccino Novembro Azul",8,"azul"],
 ["paredao-fotos-novembro-azul","Paredão para fotos Novembro Azul",12,"azul2"],
 ["cartao-servidor-publico-bis","Cartão dia do servidor público para bis",8,"servidor"],
 ["porta-bombom-servidor-publico","Porta bombom dia do servidor público",8,"servidor2"],
 ["kit-consciencia-negra-completo","Kit Consciência Negra Completo",70,"negra-kit",29.9],
 ["kit-novembro-azul-completo","Kit Novembro Azul Completo",63,"novembro-kit",29.9],
 ["cesta-recadinhos-servidor-publico","Cesta de recadinhos dia do servidor público",10,"cesta"],
 ["painel-servidor-publico-2","Painel dia do servidor público 2",12,"painel-servidor"],
 ["paredao-fotos-servidor-publico","Paredão para fotos dia do servidor público",12,"paredao-servidor"],
 ["lembrancinha-sache-servidor-publico","Lembrancinha para sachê de cappuccino: dia do servidor público",8,"sache-servidor"],
 ["lembrancinha-chocolates-servidor-publico","Lembrancinha para chocolates – Dia do Servidor Público",8,"chocolate"],
 ["bambole-foto-servidor-publico","Bambolê para foto dia do servidor público",8,"bambole"]
] as const;

type Product = typeof products[number];
const money = (n:number) => n.toLocaleString("pt-BR", {style:"currency", currency:"BRL"});
const slug = (s:string) => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");

function Logo(){ return <Link to="/" className="logo"><span className="logo-word"><strong>Materiais</strong><strong>Pedagógicos</strong><em>para profes</em></span></Link>; }

function Cover({product}:{product:Product}){ const [,name,,,] = product; return <div className="material-cover"><div className="cover-brand">MATERIAIS PARA PROFES</div><div className="cover-title">{name.split(" – ")[0]}</div><div className="cover-art"><span/><span/><span/><span/></div><div className="cover-foot">MATERIAL PEDAGÓGICO<br/><small>ARQUIVO DIGITAL • PDF</small></div></div>; }

function Header({openCategories}:{openCategories:()=>void}){
 const [mobile,setMobile]=useState(false); const [search,setSearch]=useState(false);
 const tile=(href:string,label:string,icon:React.ReactNode)=><a href={href} className="menu-tile"><span>{icon}</span><b>{label}</b></a>;
 return <>
  <div className="topbar"><div className="top-contact"><span><Mail/> contato@materiaisparaprofes.com.br</span><span><Phone/> 43 998649903</span></div><div className="top-social"><Instagram/><MessageCircle/><Facebook/><a href="/minha-conta">Área membro</a></div></div>
  <header className="header"><div className="head-row"><button className="mobile-toggle" onClick={()=>setMobile(v=>!v)} aria-label="Menu"><Menu/></button><a href="/minha-conta" className="member-box">ÁREA MEMBRO</a><Logo/><div className="search-wrap"><input className={search?"search open":"search"} placeholder="BUSCAR NO SITE"/><button onClick={()=>setSearch(true)} aria-label="Buscar"><Search/></button></div></div>
   <div className="menu-row"><nav>{tile("/","INÍCIO",<FileText/>)}{tile("/sobre","SOBRE",<BookOpen/>)}{tile("/minha-conta/downloads","DOWNLOADS",<Download/>)}{tile("/contato","CONTATO",<Mail/>)}<button className="menu-tile" onClick={()=>window.alert("Instagram • WhatsApp • Pinterest • Telegram • Facebook")}><span><MessageCircle/></span><b>SOCIAIS</b></button><button className="menu-tile" onClick={openCategories}><span><FileText/></span><b>CATEGORIAS</b></button>{tile("/blog","BLOG",<BookOpen/>)}</nav><a href="/carrinho" className="cart-tile"><span><ShoppingCart/></span><b>R$ 0,00</b><small>0</small></a></div>
  </header>
  {mobile&&<div className="mobile-menu"><a href="/">INÍCIO</a><a href="/sobre">SOBRE</a><a href="/minha-conta/downloads">DOWNLOADS</a><a href="/contato">CONTATO</a><button onClick={()=>window.alert("Instagram • WhatsApp • Pinterest • Telegram • Facebook")}>SOCIAIS</button><button onClick={openCategories}>CATEGORIAS</button><a href="/blog">BLOG</a><details><summary>Minha conta</summary><a href="/minha-conta">Minha conta</a><a href="/minha-conta/pedidos">Pedidos</a><a href="/minha-conta/downloads">Downloads</a><a href="/minha-conta/endereco">Endereço</a><a href="/minha-conta/detalhes">Detalhes da conta</a><a href="/minha-conta/senha">Senha perdida</a></details></div>}
 </>;
}

function ProductCard({product,add}:{product:Product;add:(p:Product)=>void}){ const [href,name,price,theme,sale]=product; return <article className="product-card"><a href={`/produto/${href}`} className="product-image"><Cover product={product}/>{sale&&<span className="sale-badge">Oferta!</span>}</a><div className="product-info"><a href={`/produto/${href}`}><h3>{name}</h3></a><div className="price">{sale&&<del>{money(price)}</del>}<strong>{money(sale??price)}</strong></div><button className="buy" onClick={()=>add(product)}><ShoppingCart/> Comprar agora</button></div></article>; }

function Home({add,openCategories}:{add:(p:Product)=>void;openCategories:()=>void}){
 const cats=[["Jogos",32,"games"],["Ensino Fundamental",234,"fundamental"],["Educação Infantil",261,"infantil"],["Educação Especial",243,"especial"],["Datas Comemorativas",221,"datas"],["Apostilas",24,"apostilas"]];
 return <main>
  <section className="intro"><Logo/><h1>Materiais para Profes</h1><p>Minha missão é oferecer materiais pedagógicos que estimulem o aprendizado de forma lúdica e divertida de crianças, jovens, adultos e idosos. Nosso maior objetivo é proporcionar aos professores materiais de alta qualidade que possam auxiliar de forma eficaz dentro e fora de sala de aula. Agora explore nossos materiais e façam uma excelente compra!</p></section>
  <section className="how"><h2><span>COMO</span> FUNCIONA</h2><div className="how-grid"><div className="how-card pink"><BookOpen/><h3>Ação Educacional Imediata</h3><p>Chegou a hora de selecionar suas atividades e começar. Inicie sua jornada de ensino de forma envolvente e lúdica com tarefas práticas e divertidas.</p></div><div className="how-card yellow"><Printer/><h3>Liberte sua Impressão</h3><p>Liberdade total para imprimir onde e quando quiser. Acesso permanente e ilimitado a arquivos PDF cuidadosamente organizados e prontos.</p></div><div className="how-card cyan"><Mail/><h3>Receba no Seu Espaço Digital</h3><p>Ganhe acesso a documentos totalmente digitais após concluir a compra. Receba arquivos diretamente no e-mail ou em Minha Conta.</p></div></div></section>
  <section className="categories"><h2 className="cat-title">CATEGORIAS</h2><div className="category-row">{cats.map(([name,count,theme])=><a href={`/categoria/${slug(String(name))}`} key={String(name)}><span className={`category-icon ${theme}`}><FileText/></span><b>{name}</b><small>{count} materiais</small></a>)}<button className="all-cats" onClick={openCategories}>Todas categorias</button></div></section>
  <section className="catalog"><h2><span>NOSSAS</span> CATEGORIAS</h2><div className="product-grid">{products.map(product=><ProductCard key={product[0]} product={product} add={add}/>)}</div><div className="pagination">{[1,2,3,4].map(n=><button key={n} className={n===1?"active":""}>{n}</button>)}<span>…</span><button>84</button><button>85</button><button>86</button><button>→</button></div></section>
 </main>;
}

function Footer({openCategories}:{openCategories:()=>void}){ return <footer><div className="footer-grid"><div className="footer-logo"><Logo/></div><div className="footer-stamp brown"><h4>Loja</h4><a href="/minha-conta">Painel</a><a href="/minha-conta/downloads">Meus arquivos</a><a href="/minha-conta/pedidos">Pedidos</a><a href="/minha-conta/senha">Redefinir senha</a></div><div className="footer-stamp pink"><h4>Institucional</h4><a href="/">Início</a><a href="/contato">Contato</a><a href="/blog">Blog</a><a href="/sobre">Sobre</a><a href="/politica-privacidade">Política Privacidade</a><a href="/termos-de-uso">Termos de uso</a></div><div className="footer-stamp brown"><h4>Categorias</h4>{categories.slice(0,6).map(c=><a href={`/categoria/${slug(c)}`} key={c}>{c}</a>)}<button onClick={openCategories}>Todas categorias</button></div><div className="footer-stamp pink payment-stamp"><h4>Formas de pagamento</h4><div><span><QrCode/> PIX</span><span><CreditCard/> BOLETO</span><span>VISA</span><span>MASTERCARD</span><span>ELO</span></div></div></div><div className="footer-bottom">Materiais Para Profes: Seu Portal de Recursos | CNPJ nº 00.000.000/0001-00 | Todos os direitos reservados. Copyright ©2026.</div></footer>; }

function CategoriesPopup({close}:{close:()=>void}){ const [query,setQuery]=useState(""); return <div className="overlay" onClick={close}><aside className="category-popup" onClick={e=>e.stopPropagation()}><button className="popup-close" onClick={close}><X/></button><h2>Todas as categorias</h2><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Pesquisar categoria..."/><div className="cat-list">{categories.filter(c=>c.toLowerCase().includes(query.toLowerCase())).map(c=><a href={`/categoria/${slug(c)}`} key={c}>{c}<ChevronRight/></a>)}</div></aside></div>; }

function GenericPage({title}:{title:string}){ return <main className="page"><h1>{title}</h1><p>Esta página faz parte da loja Materiais Para Profes. Em breve você poderá acessar todos os recursos desta seção.</p></main>; }

export default function Index(){
 const {pathname} = useLocation(); const [popup,setPopup]=useState(false); const [promo,setPromo]=useState(true); const [cart,setCart]=useState<Product[]>([]);
 const add=(p:Product)=>setCart(items=>[...items,p]); const productSlug=pathname.startsWith("/produto/")?pathname.split("/")[2]:""; const product=products.find(p=>p[0]===productSlug);
 const title=pathname==="/sobre"?"Sobre a Materiais Para Profes":pathname==="/contato"?"Entre em contato":pathname==="/blog"?"Blog":pathname.startsWith("/categoria/")?`Materiais: ${pathname.split("/")[2]?.replaceAll("-"," ")}`:pathname==="/carrinho"?"Seu carrinho":pathname==="/checkout"?"Finalizar compra":pathname.startsWith("/minha-conta")?"Minha Conta":"";
 return <div className="site"><Header openCategories={()=>setPopup(true)}/>{pathname==="/"?<Home add={add} openCategories={()=>setPopup(true)}/>:product?<main className="page"><div className="product-detail"><div className="detail-cover"><Cover product={product}/></div><div className="product-detail-info"><p className="category-name">Material digital</p><h1>{product[1]}</h1><div className="detail-price">{product[4]&&<del>{money(product[2])}</del>}<strong>{money(product[4]??product[2])}</strong></div><p>Material pedagógico em PDF, pronto para imprimir e utilizar em sala de aula. Receba por e-mail e acesse em Minha Conta após a compra.</p><button className="primary" onClick={()=>add(product)}>Comprar agora</button></div></div></main>:<GenericPage title={title||"Materiais Para Profes"}/>} {popup&&<CategoriesPopup close={()=>setPopup(false)}/>} {promo&&pathname==="/"&&<div className="promo-wrap"><button className="promo-close" onClick={()=>setPromo(false)}><X/></button><div className="promo"><span>Oferta do mês</span><b>Kit Novembro Azul Completo</b><small>7 materiais · R$ 63,00 → R$ 29,90</small><a href="/produto/kit-novembro-azul-completo">Ver kit</a></div></div>}<Footer openCategories={()=>setPopup(true)}/></div>;
}

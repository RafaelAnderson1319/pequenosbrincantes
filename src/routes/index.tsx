import { useState, type ReactNode } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Search, ShoppingCart, UserRound, Menu, X, ChevronRight, Instagram, MessageCircle, Send, Facebook, Mail, Phone, Download, BookOpen, Printer, Laptop, FileText, CreditCard, QrCode } from "lucide-react";

const categories = ["Apostilas","Avaliação de Sondagem diagnóstica","Blog","Datas Comemorativas","Dia do livro","Educação Especial","Educação Infantil","Ensino Fundamental","Jogos","Kit sala de aula crianças","Kit sala de aula doce aventura","Leitura","Matemática","Materiais","Materiais 07 de setembro","Materiais alimentação saudável","Materiais Aula da Saudade","Materiais consciência negra","Materiais Copa do Mundo","Materiais cristãos","Materiais de alfabetização","Materiais de Bullying","Materiais de Carnaval","Materiais de férias","Materiais de folclore","Materiais de formatura","Materiais de halloween","Materiais de higiene bucal","Materiais de Inverno","Materiais de Natal","Materiais de Páscoa","Materiais de primavera","Materiais Descobrimento do Brasil","Materiais dia da água","dia da árvore","dia da bandeira","dia da coordenação pedagógica","dia da escola","dia da merendeira","dia da proclamação da república","dia das crianças","dia das mães","dia do cabelo maluco","dia do circo","dia do diretor","dia do estudante","dia do índio","dia do servidor público","dia do soldado","dia do trabalho","dia do trânsito","dia dos avós","dia dos pais","dia dos professores","Materiais dos animais","Festa Junina","Maio Laranja","Meio ambiente","novembro azul","Outubro rosa","setembro amarelo","volta às aulas","Modelos de relatórios","Painel","Planner","Reunião de pais","Saúde"];

const products = [
 {id:1,slug:"painel-consciencia-negra-diversidade",name:"Painel consciência negra: celebrar a diversidade",price:12,category:"Materiais consciência negra",theme:"diversidade",sale:false},
 {id:2,slug:"cartao-dia-da-merendeira-2",name:"Cartão dia da merendeira 2",price:8,category:"dia da merendeira",theme:"merendeira",sale:false},
 {id:3,slug:"cartaozinho-dia-da-merendeira-1",name:"Cartãozinho dia da merendeira 1",price:8,category:"dia da merendeira",theme:"merendeira2",sale:false},
 {id:4,slug:"lembrancinha-sache-cappuccino-novembro-azul",name:"Lembrancinha para sachê de cappuccino Novembro Azul",price:8,category:"novembro azul",theme:"azul",sale:false},
 {id:5,slug:"paredao-fotos-novembro-azul",name:"Paredão para fotos Novembro Azul",price:12,category:"novembro azul",theme:"azul2",sale:false},
 {id:6,slug:"cartao-servidor-publico-bis",name:"Cartão dia do servidor público para bis",price:8,category:"dia do servidor público",theme:"servidor",sale:false},
 {id:7,slug:"porta-bombom-servidor-publico",name:"Porta bombom dia do servidor público",price:8,category:"dia do servidor público",theme:"servidor2",sale:false},
 {id:8,slug:"kit-consciencia-negra-completo",name:"Kit Consciência Negra Completo",price:70,sale:29.9,category:"Materiais consciência negra",theme:"negra-kit"},
 {id:9,slug:"kit-novembro-azul-completo",name:"Kit Novembro Azul Completo",price:63,sale:29.9,category:"novembro azul",theme:"novembro-kit"},
 {id:10,slug:"cesta-recadinhos-servidor-publico",name:"Cesta de recadinhos dia do servidor público",price:10,category:"dia do servidor público",theme:"cesta",sale:false},
 {id:11,slug:"painel-servidor-publico-2",name:"Painel dia do servidor público 2",price:12,category:"dia do servidor público",theme:"painel-servidor",sale:false},
 {id:12,slug:"paredao-fotos-servidor-publico",name:"Paredão para fotos dia do servidor público",price:12,category:"dia do servidor público",theme:"paredao-servidor",sale:false},
 {id:13,slug:"lembrancinha-sache-servidor-publico",name:"Lembrancinha para sachê de cappuccino: dia do servidor público",price:8,category:"dia do servidor público",theme:"sache-servidor",sale:false},
 {id:14,slug:"lembrancinha-chocolates-servidor-publico",name:"Lembrancinha para chocolates – Dia do Servidor Público",price:8,category:"dia do servidor público",theme:"chocolate",sale:false},
 {id:15,slug:"bambole-foto-servidor-publico",name:"Bambolê para foto dia do servidor público",price:8,category:"dia do servidor público",theme:"bambole",sale:false}
];

const money=(n:number)=>n.toLocaleString("pt-BR",{style:"currency",currency:"BRL"});
const makeSlug=(s:string)=>s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");

function Logo(){return <Link to="/" className="logo"><span className="logo-art"><b>Materiais</b><b>Pedagógicos</b><i>para profes</i></span></Link>}

function Header({openCategories}:{openCategories:()=>void}){
 const [mobile,setMobile]=useState(false); const [search,setSearch]=useState(false);
 const tile=(to:string,label:string,icon:ReactNode)=><Link to={to} className="menu-tile"><span>{icon}</span><b>{label}</b></Link>;
 return <>
  <div className="topbar"><div className="top-contact"><span><Mail/> contato@materiaisparaprofes.com.br</span><span><Phone/> 43 998649903</span></div><div className="top-social"><Instagram/><MessageCircle/><Send/><Facebook/><Link to="/minha-conta">Área membro</Link></div></div>
  <header className="header"><div className="head-row"><button className="mobile-toggle" onClick={()=>setMobile(v=>!v)}>{mobile?<X/>:<Menu/>}</button><Link to="/minha-conta" className="member-box">ÁREA MEMBRO</Link><Logo/><div className="search-wrap"><input className={search?"search open":"search"} placeholder="BUSCAR NO SITE"/><button onClick={()=>setSearch(true)} aria-label="Buscar"><Search/></button></div></div>
   <div className="menu-row"><nav>{tile("/","INÍCIO",<FileText/>)}{tile("/sobre","SOBRE",<BookOpen/>)}{tile("/minha-conta/downloads","DOWNLOADS",<Download/>)}{tile("/contato","CONTATO",<Mail/>)}<button className="menu-tile" onClick={()=>alert("Instagram · WhatsApp · Pinterest · Telegram · Facebook")}><span><MessageCircle/></span><b>SOCIAIS</b></button><button className="menu-tile" onClick={openCategories}><span><FileText/></span><b>CATEGORIAS</b></button>{tile("/blog","BLOG",<BookOpen/>)}</nav><Link to="/carrinho" className="cart-tile"><span><ShoppingCart/></span><b>R$ 0,00</b><small>0</small></Link></div>
  </header>
  {mobile&&<div className="mobile-menu"><Link to="/">INÍCIO</Link><Link to="/sobre">SOBRE</Link><Link to="/minha-conta/downloads">DOWNLOADS</Link><Link to="/contato">CONTATO</Link><button onClick={()=>alert("Instagram · WhatsApp · Pinterest · Telegram · Facebook")}>SOCIAIS</button><button onClick={openCategories}>CATEGORIAS</button><Link to="/blog">BLOG</Link><details><summary>Minha conta</summary><Link to="/minha-conta">Minha conta</Link><Link to="/minha-conta/pedidos">Pedidos</Link><Link to="/minha-conta/downloads">Downloads</Link><Link to="/minha-conta/endereco">Endereço</Link><Link to="/minha-conta/detalhes">Detalhes da conta</Link><Link to="/minha-conta/senha">Senha perdida</Link></details></div>}
 </>;
}

function Cover({p}:{p:any}){return <div className={`material-cover theme-${p.theme}`}><div className="cover-head">MATERIAIS PARA PROFES</div><div className="cover-title">{p.name.split(" – ")[0]}</div><div className="cover-illustration"><span></span><span></span><span></span><span></span></div><div className="cover-caption">MATERIAL PEDAGÓGICO<br/><small>ARQUIVO DIGITAL • PDF</small></div></div>}
function Card({p,onAdd}:{p:any;onAdd:(p:any)=>void}){return <article className="product-card"><Link to={`/produto/${p.slug}`} className="product-image"><Cover p={p}/>{p.sale&&<span className="sale-badge">Oferta!</span>}</Link><div className="product-info"><Link to={`/produto/${p.slug}`}><h3>{p.name}</h3></Link><div className="price">{p.sale&&<del>{money(p.price)}</del>}<strong>{money(p.sale??p.price)}</strong></div><button className="buy" onClick={()=>onAdd(p)}><ShoppingCart/> Comprar agora</button></div></article>}
function Grid({onAdd}:{onAdd:(p:any)=>void}){return <><div className="product-grid">{products.map(p=><Card key={p.id} p={p} onAdd={onAdd}/>)}</div><div className="pagination">{[1,2,3,4].map(n=><button key={n} className={n===1?"active":""}>{n}</button>)}<span>…</span><button>84</button><button>85</button><button>86</button><button>→</button></div></>}

function Home({onAdd,openCategories}:{onAdd:(p:any)=>void;openCategories:()=>void}){
 const cats=[["Jogos",32,"games"],["Ensino Fundamental",234,"fundamental"],["Educação Infantil",261,"infantil"],["Educação Especial",243,"especial"],["Datas Comemorativas",221,"datas"],["Apostilas",24,"apostilas"]];
 return <main>
  <section className="intro"><Logo/><h1>Materiais para Profes</h1><p>Minha missão é oferecer materiais pedagógicos que estimulem o aprendizado de forma lúdica e divertida de crianças, jovens, adultos e idosos. Nosso maior objetivo é proporcionar aos professores materiais de alta qualidade que possam auxiliar de forma eficaz dentro e fora de sala de aula. Agora explore nossos materiais e façam uma excelente compra!</p></section>
  <section className="how"><h2><span>COMO</span> FUNCIONA</h2><div className="how-grid"><div className="how-card pink"><BookOpen/><h3>Ação Educacional Imediata</h3><p>Chegou a hora de selecionar suas atividades e começar. Inicie sua jornada de ensino de forma envolvente e lúdica com tarefas práticas e divertidas.</p></div><div className="how-card yellow"><Printer/><h3>Liberte sua Impressão</h3><p>Liberdade total para imprimir onde e quando quiser. Acesso permanente e ilimitado a arquivos PDF cuidadosamente organizados e prontos.</p></div><div className="how-card cyan"><Mail/><h3>Receba no Seu Espaço Digital</h3><p>Ganhe acesso a documentos totalmente digitais após concluir a compra. Receba arquivos diretamente no e-mail ou em Minha Conta.</p></div></div></section>
  <section className="categories"><h2 className="cat-title">CATEGORIAS</h2><div className="category-row">{cats.map(([name,count,theme])=><Link to={`/categoria/${makeSlug(String(name))}`} key={String(name)}><span className={`category-icon ${theme}`}><FileText/></span><b>{name}</b><small>{count} materiais</small></Link>)}<button className="all-cats" onClick={openCategories}>Todas categorias</button></div></section>
  <section id="produtos" className="catalog"><h2><span>NOSSAS</span> CATEGORIAS</h2><Grid onAdd={onAdd}/></section>
 </main>
}

function Footer({openCategories}:{openCategories:()=>void}){return <footer><div className="footer-grid"><div className="footer-logo"><Logo/></div><div className="footer-stamp brown"><h4>Loja</h4><Link to="/minha-conta">Painel</Link><Link to="/minha-conta/downloads">Meus arquivos</Link><Link to="/minha-conta/pedidos">Pedidos</Link><Link to="/minha-conta/senha">Redefinir senha</Link></div><div className="footer-stamp pink"><h4>Institucional</h4><Link to="/">Início</Link><Link to="/contato">Contato</Link><Link to="/blog">Blog</Link><Link to="/sobre">Sobre</Link><Link to="/politica-privacidade">Política Privacidade</Link><Link to="/termos-de-uso">Termos de uso</Link></div><div className="footer-stamp brown"><h4>Categorias</h4>{categories.slice(0,6).map(c=><Link key={c} to={`/categoria/${makeSlug(c)}`}>{c}</Link>)}<button onClick={openCategories}>Todas categorias</button></div><div className="footer-stamp pink payment-stamp"><h4>Formas de pagamento</h4><div><span><QrCode/> PIX</span><span><CreditCard/> BOLETO</span><span>VISA</span><span>MASTER</span><span>ELO</span></div></div></div><div className="footer-bottom">Materiais Para Profes: Seu Portal de Recursos | CNPJ nº 00.000.000/0001-00 | Todos os direitos reservados. Copyright ©2026.</div></footer>}

function CategoryPopup({close}:{close:()=>void}){const [q,setQ]=useState("");return <div className="overlay" onClick={close}><aside className="category-popup" onClick={e=>e.stopPropagation()}><button className="popup-close" onClick={close}><X/></button><h2>Todas categorias</h2><input placeholder="Pesquisar categoria..." value={q} onChange={e=>setQ(e.target.value)}/><div className="cat-list">{categories.filter(c=>c.toLowerCase().includes(q.toLowerCase())).map(c=><Link key={c} to={`/categoria/${makeSlug(c)}`} onClick={close}>{c}<ChevronRight/></Link>)}</div></aside></div>}
function Promo({close}:{close:()=>void}){return <div className="promo"><button onClick={close}><X/></button><b>Oferta do mês</b><strong>Kit Novembro Azul Completo</strong><span>7 materiais · R$ 63,00 → R$ 29,90</span><Link to="/produto/kit-novembro-azul-completo">Ver kit</Link></div>}

function ProductPage({p,onAdd}:{p:any;onAdd:(p:any)=>void}){return <main className="page"><div className="product-detail"><div><Cover p={p}/></div><div><p className="category-name">{p.category}</p><h1>{p.name}</h1><div className="detail-price">{p.sale&&<del>{money(p.price)}</del>}<strong>{money(p.sale??p.price)}</strong></div><p>Material pedagógico digital em PDF, pronto para imprimir e utilizar. Ideal para organizar atividades, painéis, cartões e propostas educativas.</p><ul><li>Arquivo digital em PDF</li><li>Acesso permanente após a compra</li><li>Receba por e-mail e em Minha Conta</li></ul><button className="primary" onClick={()=>onAdd(p)}>Comprar agora <ShoppingCart/></button></div></div><h2>Produtos relacionados</h2><Grid onAdd={onAdd}/></main>}
function Account(){return <main className="page"><h1>Minha Conta</h1><div className="account-layout"><aside className="account-nav"><Link to="/minha-conta">Painel</Link><Link to="/minha-conta/pedidos">Pedidos</Link><Link to="/minha-conta/downloads">Downloads</Link><Link to="/minha-conta/endereco">Endereço</Link><Link to="/minha-conta/detalhes">Detalhes da conta</Link><Link to="/minha-conta/senha">Senha perdida</Link></aside><section className="account-content"><h2>Acesse sua conta</h2><input placeholder="E-mail"/><input placeholder="Senha" type="password"/><button className="primary">Entrar</button></section></div></main>}
function Simple({title,children}:{title:string;children?:ReactNode}){return <main className="page simple"><h1>{title}</h1>{children||<p>Conteúdo da Materiais Para Profes.</p>}</main>}
function Blog(){return <main className="page"><h1>Blog</h1><div className="blog-grid">{["Ideias para atividades lúdicas","Consciência Negra na escola","Jogos pedagógicos para imprimir"].map(t=><article key={t}><div className="blog-thumb"><FileText/></div><h2>{t}</h2><p>Conteúdos e ideias para deixar sua rotina pedagógica mais prática.</p><Link to="/blog/artigo">Ler mais</Link></article>)}</div></main>}

export default function Index(){
 const location=useLocation(); const path=location.pathname; const [cart,setCart]=useState<any[]>([]); const [categoriesOpen,setCategoriesOpen]=useState(false); const [promo,setPromo]=useState(true);
 const add=(p:any)=>setCart(c=>[...c,p]);
 const product=products.find(p=>path.includes(p.slug));
 const category=path.startsWith("/categoria/")?path.split("/")[2]:"";
 let content:ReactNode;
 if(path==="/") content=<Home onAdd={add} openCategories={()=>setCategoriesOpen(true)}/>;
 else if(product) content=<ProductPage p={product} onAdd={add}/>;
 else if(path==="/sobre") content=<Simple title="Sobre"><p>O Materiais Para Profes é um portal de recursos pedagógicos digitais criado para facilitar a rotina de professores com materiais criativos, práticos e prontos para imprimir.</p></Simple>;
 else if(path==="/contato") content=<Simple title="Contato"><p>E-mail: contato@materiaisparaprofes.com.br</p><p>Telefone: 43 998649903</p></Simple>;
 else if(path==="/blog"||path.startsWith("/blog/")) content=<Blog/>;
 else if(path.startsWith("/minha-conta")) content=<Account/>;
 else if(path==="/politica-privacidade") content=<Simple title="Política de Privacidade"><p>Seus dados são usados para autenticação, processamento de pedidos e entrega dos materiais adquiridos.</p></Simple>;
 else if(path==="/termos-de-uso") content=<Simple title="Termos de uso"><p>Os materiais digitais são destinados ao uso pedagógico conforme as condições de compra e licença.</p></Simple>;
 else if(path==="/carrinho") content=<Simple title="Carrinho"><p>Seu carrinho possui {cart.length} item(ns).</p><Link to="/checkout" className="primary">Ir para checkout</Link></Simple>;
 else if(path==="/checkout") content=<Simple title="Finalizar compra"><p>Confira seus dados e escolha PIX, boleto ou cartão.</p></Simple>;
 else if(path.startsWith("/categoria/")) content=<main className="page"><h1>Materiais</h1><Grid onAdd={add}/></main>;
 else content=<Home onAdd={add} openCategories={()=>setCategoriesOpen(true)}/>;
 return <div className="site"><Header openCategories={()=>setCategoriesOpen(true)}/>{content}{promo&&<Promo close={()=>setPromo(false)}/>}<Footer openCategories={()=>setCategoriesOpen(true)}/>{categoriesOpen&&<CategoryPopup close={()=>setCategoriesOpen(false)}/>}</div>;
}

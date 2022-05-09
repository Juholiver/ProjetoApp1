class ItemCarrinho {
    constructor(
        public id: number | undefined,
        public img: any,
        public titulo: string | undefined,
        public descricao_oferta: string | undefined,
        public valor: any| undefined,
        public quantidade: any| undefined,

    ) {}
}

export {ItemCarrinho}
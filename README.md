# hwLeaning

``` java
public static void createToc(XWPFDocument document) {
        XWPFParagraph para = document.createParagraph();
        XWPFRun run = para.createRun();
        run.setText("目录");
        run.setBold(true);
        run.setFontSize(22);
        para.setAlignment(ParagraphAlignment.CENTER);
        CTSimpleField toc = para.getCTP().addNewFldSimple();
        toc.setInstr("TOC \\o \"1-3\" \\h \\z \\u");
        toc.setDirty(STOnOff1.ON);
        document.createParagraph().createRun().addBreak(BreakType.PAGE);
        createSelectContent(document,"标题1",0);
        createSelectContent(document,"标题2",0);
        createSelectContent(document,"标题2.1",1);
        createSelectContent(document,"标题2.2",1);
        createSelectContent(document,"标题3",0);
        createSelectContent(document,"标题3.1",1);
        createSelectContent(document,"标题3.1.1",2);
        createSelectContent(document,"标题3.1.2",2);
        createSelectContent(document,"标题3.2",1);
        createSelectContent(document,"标题3.3",1);
        document.enforceUpdateFields();
    }


    public static void createSelectContent(XWPFDocument document, String title, int level){
        XWPFParagraph p1 = document.createParagraph();
        XWPFRun r1 = p1.createRun();
        r1.setText(title);
        CTP ctP = p1.getCTP();
        CTPPr ctPPr = ctP.getPPr();
        if (ctPPr == null) {
            ctPPr = ctP.addNewPPr();
        }
        CTDecimalNumber levelNum = CTDecimalNumber.Factory.newInstance();
        levelNum.setVal(BigInteger.valueOf(level));
        ctPPr.setOutlineLvl(levelNum);

        XWPFParagraph p2 = document.createParagraph();
        p2.createRun().setText("新华社北京7月26日电7月26日，国家主席习近平致电阮春福，祝贺他当选连任越南国家主席。\n" +
                "习近平在贺电中指出，中越是山水相连的社会主义邻邦，传统情谊深厚，共同利益广泛。面对百年变局和世纪灾疫，双方坚守共同理想信念，践行团结友好初心，以实际行动赋予两国全面战略合作新的时代内涵。\n" +
                "习近平强调，今年以来，越共十三大胜利召开，中国共产党迎来百年华诞。中越两党和国家建设事业步入承前启后关键阶段。我高度重视中越关系发展，愿同越南领导同志们一道努力，加强对新时期两党两国关系的战略引领，朝着构建中越具有战略意义的命运共同体目标不断迈进。\n" +
                "同日，国务院总理李克强致电祝贺范明政当选连任越南政府总理，表示愿同范明政总理一道努力，增进双方政治互信，夯实友好合作基础，加快发展战略对接，构建互利共赢格局，推动新时期中越关系不断向前发展。");

    }
    ```
